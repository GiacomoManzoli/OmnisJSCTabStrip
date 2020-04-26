export class Tab {
    id: number = 0
    title: string = ""
    action?: "add" | "none"
    active: boolean = false
    canClose?: boolean = true
    activeColor?: string

    constructor(data: { id?: number; title?: string }) {
        if (data.id) {
            this.id = data.id
        }
        if (data.title) {
            this.title = data.title
        }
    }
}

declare type TabStripEvent = "tabclick" | "tabclose" | "tabadd"
declare type TabStripEventHandler = (event: Event, tabId: number, index: number, tab: Tab) => void

import "./style.css"

export enum CssVar {
    activeColor = "--my-active-color",
    backgroundColor = "--my-bkg-color",
    backgroundTabActiveColor = "--my-bkg-tab-active-color",
    backgroundTabColor = "--my-bkg-tab-color",
    borderColor = "--my-border-color",
    textColor = "--my-text-color",
    textActiveColor = "--my-text-active-color",
}

const ADD_TAB: Tab = {
    id: -1,
    title: "",
    action: "add",
    active: false,
}

const FILLER_TAB: Tab = {
    id: -2,
    title: "",
    action: "none",
    active: false,
}

export class TabStrip {
    tabs: Tab[]
    container: HTMLElement
    handlers: Map<TabStripEvent, TabStripEventHandler>

    activeColor: string = "#FF3333"
    canAddTab: boolean = true
    canCloseTab: boolean = true

    constructor(container: HTMLElement) {
        this.tabs = []
        this.container = container
        container.classList.add("my-tabstrip")
        this.handlers = new Map()
    }

    setTabs(tabs: Tab[]) {
        this.tabs = [...tabs]
        if (this.canAddTab) {
            this.tabs.push(ADD_TAB)
        } else {
            this.tabs.push(FILLER_TAB)
        }
    }

    setCssVar(cssVar: CssVar, value: string) {
        console.log(CssVar.activeColor, value)
        this.container.style.setProperty(cssVar, value)
    }

    getCssVar(cssVar: string): string {
        return getComputedStyle(this.container).getPropertyValue(cssVar)
    }

    addEventListener(evName: TabStripEvent, callback: TabStripEventHandler) {
        this.handlers.set(evName, callback)
    }

    setActive(id: number) {
        const activeTab = this.tabs.find((tab) => tab.active)
        activeTab.active = false
        const newActiveTab = this.tabs.find((tab) => tab.id == id)
        newActiveTab.active = true
        this.render()
    }

    closeTab(id: number) {
        this.tabs = this.tabs.filter((tab) => tab.id !== id)
        const activeTab = this.tabs.find((tab) => tab.active)
        if (!activeTab) {
            this.tabs[0].active = true
        }
        this.render()
    }

    addTab() {
        const id = this.tabs.reduce((a, b) => Math.max(a, b.id), 0) + 1
        const newTab = {
            id,
            title: "Nuovo tab",
            active: false,
        }
        this.tabs = this.tabs.filter((tab) => tab.id > 0).concat([newTab, this.addTab ? ADD_TAB : undefined])

        this.setActive(id)
        this.render()
        return newTab
    }

    private onTabClick(event: Event, tabId: number, index: number, tab: Tab) {
        event.preventDefault()
        event.stopPropagation()
        const handler = this.handlers.get("tabclick")
        if (handler) {
            handler(event, tabId, index, tab)
        }
    }
    private onTabCloseClick(event: Event, tabId: number, index: number, tab: Tab) {
        event.preventDefault()
        event.stopPropagation()
        const handler = this.handlers.get("tabclose")
        if (handler) {
            handler(event, tabId, index, tab)
        }
    }
    private onTabAddClick(event: Event, tabId: number, index: number, tab: Tab) {
        event.preventDefault()
        event.stopPropagation()
        const handler = this.handlers.get("tabadd")
        if (handler) {
            handler(event, tabId, index, tab)
        }
    }

    render(): void {
        console.log(this)

        this.container.innerHTML = ""
        const ul = document.createElement("ul")
        ul.classList.add("my-tabstrip-ul")
        this.tabs.map((tab, index) => this.createItem(tab, index)).forEach((li) => ul.appendChild(li))
        this.container.appendChild(ul)
    }

    private createItem(tab: Tab, index: number) {
        let li: HTMLLIElement
        if (tab.action === "add") {
            li = this.createAddTab(tab, index)
        } else if (tab.action == "none") {
            li = this.createFillerTab()
        } else {
            li = this.createTab(tab, index)
        }

        return li
    }
    private createAddTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("action-add")
        li.classList.add("my-border-filler")
        const a = document.createElement("a")
        a.innerHTML = "+" //+ "&#10006;" + "&#x2715;"
        a.addEventListener("click", () => {
            this.onTabAddClick(event, tab.id, index, tab)
        })
        li.append(a)

        return li
    }

    private createFillerTab() {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("my-border-filler")
        const a = document.createElement("a")
        a.innerHTML = "&nbsp;" //+ "&#10006;" + "&#x2715;"
        li.append(a)

        return li
    }

    private createTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        if (tab.active) {
            li.classList.add("active")
            if (tab.activeColor && tab?.activeColor != "") {
                li.style.setProperty(CssVar.activeColor, tab.activeColor)
            }
        }
        li.addEventListener("click", () => {
            this.onTabClick(event, tab.id, index, tab)
        })

        const a = document.createElement("a")
        a.classList.add("my-tabstrip-li-a")
        a.innerText = tab.title //+ "&times;" + "&#10006;" + "&#x2715;"
        li.append(a)
        if (this.canCloseTab && tab.canClose) {
            li.append(this.createCloseIcon(tab, index))
        }

        return li
    }

    private createCloseIcon(tab: Tab, index: number) {
        const closeIcon = document.createElement("span")
        closeIcon.classList.add("my-tabstrip-li-icon")
        closeIcon.innerHTML = "&#x2715;"
        if (tab.active) {
            closeIcon.classList.add("active-icon")
        }
        closeIcon.addEventListener("click", () => {
            this.onTabCloseClick(event, tab.id, index, tab)
        })
        return closeIcon
    }
}
