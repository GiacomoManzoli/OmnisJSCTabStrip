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

const ADD_TAB: Tab = {
    id: -1,
    title: "",
    action: "add",
    active: false,
}

// const FILLER_TAB: Tab = {
//     id: -2,
//     title: "",
//     action: "none",
//     active: false,
// }

export class TabStrip {
    tabs: Tab[]
    container: HTMLElement
    handlers: Map<TabStripEvent, TabStripEventHandler>

    // jOmnisEffects?: any
    // omnisTheme?: any

    activeColor: string = "#FF3333"
    canAddTab: boolean = true
    canCloseTab: boolean = true

    backgroundColor: string

    tabBorderRadius = 8
    tabSpacing = 8
    tabWidth: number = 160
    tabMinWidth: number = 0
    tabMaxWidth: number = 0
    tabPaddingHorz: number = 8
    tabPaddingVert: number = 8

    tabBackgroundColor: string
    tabBorderColor: string = "rgb(0,0,0)"
    tabBorderSize: number = 0

    activeTabBackgroundColor: string
    activeTabTextColor: string
    textColor: string

    constructor(container: HTMLElement) {
        this.tabs = []
        this.container = container
        container.classList.add("my-tabstrip")
        this.handlers = new Map()
    }

    // setJOmnisEffects(jOmnisEffects) {
    //     this.jOmnisEffects = jOmnisEffects
    // }

    // setOmnisTheme(omnisTheme: any) {
    //     this.omnisTheme = omnisTheme
    // }

    setTabs(tabs: Tab[]) {
        this.tabs = [...tabs]
        if (this.canAddTab) {
            this.tabs.push(ADD_TAB)
        }
        // else {
        //     this.tabs.push(FILLER_TAB)
        // }
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

    private onTabClick(event: MouseEvent, tabId: number, index: number, tab: Tab) {
        // const button = event.currentTarget as HTMLElement
        // const circle = document.createElement("span")
        // const diameter = Math.max(button.clientWidth, button.clientHeight)
        // const radius = diameter / 2
        // circle.style.width = circle.style.height = `${diameter}px`
        // circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
        // circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
        // circle.classList.add("tab-ripple")
        // const ripple = button.getElementsByClassName("tab-ripple")[0]
        // if (ripple) {
        //     ripple.remove()
        // }
        // button.appendChild(circle)

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

        ul.style.backgroundColor = this.backgroundColor
        ul.style.color = this.textColor

        this.tabs.map((tab, index) => this.createItem(tab, index)).forEach((li) => ul.appendChild(li))
        this.container.appendChild(ul)
    }

    private createItem(tab: Tab, index: number) {
        let li: HTMLLIElement
        if (tab.action === "add") {
            li = this.createAddTab(tab, index)
            // } else if (tab.action == "none") {
            //     li = this.createFillerTab()
        } else {
            li = this.createTab(tab, index)
        }

        // if (this.jOmnisEffects && this.omnisTheme) {
        //     //addRippleToElem(elem, theme, hasContainer, elemColor, keys, keyElement, directColor)
        //     console.log(this.jOmnisEffects, this.omnisTheme)
        //     this.jOmnisEffects.addRippleToElem(li, this.omnisTheme, true, 16711680, ["Enter", " "], null, 0x0000ff)
        // }

        return li
    }
    private createAddTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("action-add")

        li.style.backgroundColor = this.backgroundColor
        li.style.color = this.tabBackgroundColor
        li.style.marginLeft = `${this.tabSpacing}px`

        const a = document.createElement("a")
        a.innerHTML = "+" //+ "&#10006;" + "&#x2715;"
        a.addEventListener("click", (event) => {
            this.onTabAddClick(event, tab.id, index, tab)
        })
        li.append(a)

        return li
    }

    // private createFillerTab() {
    //     const li = document.createElement("li")
    //     li.classList.add("my-tabstrip-li")
    //     li.classList.add("my-border-filler")
    //     const a = document.createElement("a")
    //     a.innerHTML = "&nbsp;" //+ "&#10006;" + "&#x2715;"
    //     li.append(a)
    //     return li
    // }

    private createTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        // Tab size
        li.style.padding = `${this.tabPaddingVert}px ${this.tabPaddingHorz}px`

        if (this.tabWidth > 0) {
            li.style.width = `${this.tabWidth}px`
        } else {
            li.style.minWidth = `${this.tabMinWidth}px`
            li.style.maxWidth = `${this.tabMaxWidth}px`
        }

        li.style.backgroundColor = this.tabBackgroundColor

        // Tab border
        li.style.borderRadius = `${this.tabBorderRadius}px`
        li.style.borderWidth = `${this.tabBorderSize}px`
        if (this.tabBorderSize > 0) {
            li.style.borderStyle = "solid"
            li.style.borderColor = this.tabBorderColor
        }

        // Spacing between tabs
        if (index > 0) {
            li.style.marginLeft = `${this.tabSpacing}px`
        }

        if (tab.active) {
            li.classList.add("active")
            li.style.backgroundColor = this.activeTabBackgroundColor
            li.style.color = this.activeTabTextColor
            if (tab.activeColor && tab.activeColor != "") {
                li.style.boxShadow = `inset 0px 3px ${tab.activeColor}`
            }
        }

        li.addEventListener("click", (event) => {
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
        closeIcon.classList.add("active-icon")

        closeIcon.style.backgroundColor = this.tabBackgroundColor
        closeIcon.style.color = this.tabBackgroundColor // somehow hidden

        closeIcon.innerHTML = "&#x2715;"
        if (tab.active) {
            closeIcon.style.color = this.activeTabTextColor
            closeIcon.style.backgroundColor = this.activeTabBackgroundColor
            closeIcon.addEventListener("click", (event) => {
                this.onTabCloseClick(event, tab.id, index, tab)
            })
        }

        return closeIcon
    }
}
