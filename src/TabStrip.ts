export class Tab {
    id: number = 0
    title: string = ""
    action?: "add" | "none"
    active: boolean = false
    canClose?: boolean = true
    activeColor?: string
    backcolorOverride?: string
    backcolorOverrideActive?: string
    bordercolorOverride?: string
    bordercolorOverrideActive?: string
    textcolorOverride?: string
    textcolorOverrideActive?: string

    constructor(data: { id?: number; title?: string }) {
        if (data.id) {
            this.id = data.id
        }
        if (data.title) {
            this.title = data.title
        }
    }

    hasBackcolorOverride(activeState: boolean): boolean {
        if (activeState) {
            return this.backcolorOverrideActive && this.backcolorOverrideActive != ""
        } else {
            return this.backcolorOverride && this.backcolorOverride != ""
        }
    }

    hasBordercolorOverride(activeState: boolean): boolean {
        if (activeState) {
            return this.bordercolorOverrideActive && this.bordercolorOverrideActive != ""
        } else {
            return this.bordercolorOverride && this.bordercolorOverride != ""
        }
    }

    hasTextcolorOverride(activeState: boolean): boolean {
        if (activeState) {
            return this.textcolorOverrideActive && this.textcolorOverrideActive != ""
        } else {
            return this.textcolorOverride && this.textcolorOverride != ""
        }
    }
}

declare type TabStripEvent = "tabclick" | "tabclose" | "tabadd"
declare type TabStripEventHandler = (event: Event, tabId: number, index: number, tab: Tab) => void

import "./style.css"

const ADD_TAB: Tab = (function () {
    let t = new Tab({ id: -1, title: "" })
    t.action = "add"
    t.active = false
    return t
})()

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
    renderedTabs: Map<number, { tab: Tab; li: HTMLLIElement }> = new Map()

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

    addTabSymbolColor: string
    addTabBackgroundColor: string

    activeTabBackgroundColor: string
    activeTabTextColor: string
    textColor: string

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

    setCanAddTab(val: boolean) {
        const tabs = this.tabs.filter((t) => t.id != ADD_TAB.id)
        this.canAddTab = val
        this.setTabs(tabs)
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
        debugger
        const id = this.tabs.reduce((a, b) => Math.max(a, b.id), 0) + 1
        const newTab = new Tab({ id, title: "Nuovo tab" })
        newTab.active = false
        this.tabs = this.tabs.filter((tab) => tab.id > 0).concat([newTab, this.addTab ? ADD_TAB : undefined])

        this.setActive(id)
        this.render()
        return newTab
    }

    private onTabClick(event: MouseEvent, tabId: number, index: number, tab: Tab) {
        const button = event.currentTarget as HTMLElement
        const circle = document.createElement("span")
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
        circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
        circle.classList.add("tab-ripple")
        const ripple = button.getElementsByClassName("tab-ripple")[0]
        if (ripple) {
            ripple.remove()
        }
        button.appendChild(circle)

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
        let ul: HTMLElement
        if (this.container.innerHTML == "") {
            ul = document.createElement("ul")
            ul.classList.add("my-tabstrip-ul")
            ul.style.backgroundColor = this.backgroundColor
            ul.style.color = this.textColor
            this.container.appendChild(ul)
        } else {
            ul = this.container.querySelector("ul")
        }

        // Inserts/updates
        for (let index = this.tabs.length - 1; index >= 0; index--) {
            let currTab = this.tabs[index]
            if (this.renderedTabs.has(currTab.id)) {
                let { tab, li } = this.renderedTabs.get(currTab.id)

                if (tab.id != ADD_TAB.id) {
                    this.updateItem(li, currTab, index)
                    this.renderedTabs.set(currTab.id, { tab: currTab, li })
                }
            } else {
                let li = this.createItem(currTab, index)
                this.renderedTabs.set(currTab.id, { tab: currTab, li })

                if (index == 0) {
                    // First item
                    ul.insertBefore(li, ul.firstChild)
                } else if (index == this.tabs.length - 1) {
                    // Last item
                    ul.appendChild(li)
                } else {
                    let nextTabId = this.tabs[index + 1].id
                    let nextTabLi = this.renderedTabs.get(nextTabId).li
                    ul.insertBefore(li, nextTabLi)
                }
            }
        }

        // Deletes
        let realTabsId = new Set(this.tabs.map((t) => t.id))
        this.renderedTabs.forEach((v) => {
            if (!realTabsId.has(v.tab.id)) {
                ul.removeChild(v.li)
                this.renderedTabs.delete(v.tab.id)
            }
        })

        // this.tabs.map((tab, index) => this.createItem(tab, index)).forEach((li) => ul.appendChild(li))
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

        return li
    }
    private createAddTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("action-add")

        li.style.backgroundColor = this.addTabBackgroundColor
        li.style.color = this.addTabSymbolColor
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

        // CSS ripple
        li.style.position = "relative"
        li.style.overflow = "hidden"

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

        const a = document.createElement("a")
        a.classList.add("my-tabstrip-li-a")
        li.append(a)

        this.updateItem(li, tab, index)
        return li
    }

    private updateItem(li: HTMLLIElement, tab: Tab, index: number) {
        // Spacing between tabs
        if (index > 0) {
            li.style.marginLeft = `${this.tabSpacing}px`
        }

        const a = li.querySelector("a")
        a.innerText = tab.title //+ "&times;" + "&#10006;" + "&#x2715;"

        if (tab.active) {
            this.updateItemActive(li, tab, index)
        } else {
            this.updateItemInactive(li, tab, index)
        }

        li.onclick = (event) => {
            this.onTabClick(event, tab.id, index, tab)
        }

        const closeIcon = li.getElementsByClassName("my-tabstrip-li-close-icon")[0]
        if (closeIcon) {
            li.removeChild(closeIcon)
        }
        if (this.canCloseTab && tab.canClose) {
            li.append(this.createCloseIcon(tab, index))
        }
    }

    private updateItemActive(li: HTMLLIElement, tab: Tab, index: number) {
        li.classList.add("active")

        li.style.backgroundColor = this.activeTabBackgroundColor
        li.style.color = this.activeTabTextColor
        li.style.borderColor = this.tabBorderColor

        if (tab.hasBackcolorOverride(true)) {
            li.style.backgroundColor = tab.backcolorOverrideActive
        }

        if (tab.hasBordercolorOverride(true)) {
            li.style.borderColor = tab.bordercolorOverrideActive
        }

        if (tab.hasTextcolorOverride(true)) {
            li.style.color = tab.textcolorOverrideActive
        }

        if (tab.activeColor && tab.activeColor != "") {
            li.style.boxShadow = `inset 0px 3px ${tab.activeColor}`
        }
    }

    private updateItemInactive(li: HTMLLIElement, tab: Tab, index: number) {
        li.classList.remove("active")
        li.style.color = this.textColor
        li.style.borderColor = this.tabBorderColor
        li.style.backgroundColor = this.tabBackgroundColor

        if (tab.hasBackcolorOverride(false)) {
            li.style.backgroundColor = tab.backcolorOverride
        }

        if (tab.hasBordercolorOverride(false)) {
            li.style.borderColor = tab.bordercolorOverride
        }

        if (tab.hasTextcolorOverride(false)) {
            li.style.color = tab.textcolorOverride
        }

        li.style.boxShadow = ""
    }

    private createCloseIcon(tab: Tab, index: number) {
        const closeIcon = document.createElement("span")
        closeIcon.classList.add("my-tabstrip-li-icon")
        closeIcon.classList.add("my-tabstrip-li-close-icon")
        closeIcon.classList.add("active-icon")

        closeIcon.style.backgroundColor = this.tabBackgroundColor
        closeIcon.style.color = this.tabBackgroundColor // somehow hidden

        closeIcon.innerHTML = "&#x2715;"
        if (tab.active) {
            closeIcon.style.color = this.activeTabTextColor
            closeIcon.style.backgroundColor = this.activeTabBackgroundColor

            if (tab.hasBackcolorOverride(true)) {
                closeIcon.style.backgroundColor = tab.backcolorOverrideActive
            }

            if (tab.hasTextcolorOverride(true)) {
                closeIcon.style.color = tab.textcolorOverrideActive
            }

            closeIcon.addEventListener("click", (event) => {
                this.onTabCloseClick(event, tab.id, index, tab)
            })
        }

        return closeIcon
    }
}
