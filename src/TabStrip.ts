import "./style.css"
import { Tab } from "./Tab"

declare type TabStripEvent = "tabclick" | "tabclose" | "tabadd"
declare type TabStripEventHandler = (event: Event, tabId: number, index: number, tab: Tab) => void

const ADD_TAB: Tab = (function () {
    let t = new Tab({ id: -1, title: "" })
    t.action = "add"
    t.active = false
    return t
})()

export class TabStrip {
    tabs: Tab[]
    container: HTMLElement
    handlers: Map<TabStripEvent, TabStripEventHandler>
    renderedTabs: Map<number, { tab: Tab; li: HTMLLIElement }> = new Map()

    activeColor: string = "#FF3333"
    canAddTab: boolean = true
    canCloseTab: boolean = true

    backgroundColor: string

    isVertical: boolean = true
    isCompact: boolean = false

    tabBorderRadius = 8
    tabSpacing = 8
    tabSize: number = 160
    tabMinSize: number = 0
    tabMaxSize: number = 0
    tabPaddingHorz: number = 8
    tabPaddingVert: number = 8

    tabBackgroundColor: string
    tabBorderColor: string = "rgb(0,0,0)"
    tabBorderSize: number = 0

    addTabSymbolColor: string
    addTabBackgroundColor: string
    addTabText: string = "Add Tab"

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

    setIsCompact(val: boolean) {
        this.isCompact = val
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
        const id = this.tabs.reduce((a, b) => Math.max(a, b.id), 0) + 1
        const newTab = new Tab({ id, title: "Nuovo tab" })
        newTab.active = false
        this.tabs = this.tabs.filter((tab) => tab.id > 0).concat([newTab, this.addTab ? ADD_TAB : undefined])

        this.setActive(id)
        this.render()
        return newTab
    }

    //#region Event handlers

    private onTabClick(event: MouseEvent, tabId: number, index: number, tab: Tab) {
        const button = event.currentTarget as HTMLElement
        const circle = document.createElement("span")
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2

        let leftPos: string, topPos: string

        const rect = button.getBoundingClientRect()
        leftPos = `${event.clientX - rect.left - radius}px`
        topPos = `${event.clientY - rect.top - radius}px`

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = leftPos
        circle.style.top = topPos
        circle.classList.add("tab-ripple")

        // Add orientation-specific class for CSS
        if (this.isVertical) {
            circle.classList.add("tab-ripple-vertical")
        } else {
            circle.classList.add("tab-ripple-horizontal")
        }

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

    //#endregion

    render(): void {
        let ul: HTMLElement = this.container.querySelector("ul")
        if (!ul) {
            ul = document.createElement("ul")
            ul.classList.add("my-tabstrip-ul")
            this.container.appendChild(ul)
        }

        ul.style.backgroundColor = this.backgroundColor
        ul.style.color = this.textColor
        if (this.isVertical) {
            ul.classList.add("my-tabstrip-ul-vertical")
            ul.classList.remove("my-tabstrip-ul-horizontal")
        } else {
            ul.classList.add("my-tabstrip-ul-horizontal")
            ul.classList.remove("my-tabstrip-ul-vertical")
        }
        // console.debug("render", this.tabs)
        // Inserts/updates
        for (let index = this.tabs.length - 1; index >= 0; index--) {
            let currTab = this.tabs[index]
            if (this.renderedTabs.has(currTab.id)) {
                let { tab, li } = this.renderedTabs.get(currTab.id)

                if (tab.id != ADD_TAB.id) {
                    this.updateTab(li, currTab, index)
                } else {
                    this.updateAddTab(li, currTab, index)
                }
                this.renderedTabs.set(currTab.id, { tab: currTab, li })
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

    private createItem(tab: Tab, index: number): HTMLLIElement {
        return tab.action === "add" ? this.createAddTab(tab, index) : this.createTab(tab, index)
    }

    //#region add tab rendering
    private createAddTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("action-add")

        const a = document.createElement("a")
        // a.innerHTML = "+" //+ "&#10006;" + "&#x2715;"
        a.innerHTML =`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        `

        li.append(a)

        this.updateAddTab(li, tab, index)

        // Add event listener to the entire li element
        li.addEventListener("click", (event) => {
            this.onTabAddClick(event, tab.id, index, tab)
        })

        return li
    }

    private updateAddTab(li: HTMLLIElement, tab: Tab, index: number) {
        li.style.backgroundColor = this.addTabBackgroundColor
        li.style.color = this.addTabSymbolColor

        // Apply spacing based on orientation
        if (this.isVertical) {
            li.style.marginTop = `${this.tabSpacing}px`
            li.style.marginLeft = `0px`
        } else {
            li.style.marginTop = `0px`
            li.style.marginLeft = `${this.tabSpacing}px`
        }

        if (this.isCompact) {
            li.classList.add("action-add-compact")
        } else {
            li.classList.remove("action-add-compact")
        }

        if (this.isCompact) {
            const tabSize = this.tabSize
            li.style.width = `${tabSize}px`
        } else {
            li.style.width = "initial"
        }

        if (this.isCompact) {
            this.removeAddLabel(li)
        } else {
            if (this.isVertical) {
                let labelSpan: HTMLElement = li.querySelector(".my-tabstrip-add-label")
                if (!labelSpan) {
                    labelSpan = this.createAddLabel(li)
                }
                labelSpan.innerText = this.addTabText
            } else {
                this.removeAddLabel(li)
            }
        }
    }

    private createAddLabel(li: HTMLLIElement): HTMLElement {
        const labelSpan = document.createElement("span")
        labelSpan.classList.add("my-tabstrip-add-label")
        li.append(labelSpan)
        return labelSpan
    }

    private removeAddLabel(li: HTMLLIElement) {
        const labelSpan = li.querySelector(".my-tabstrip-add-label")
        if (labelSpan) {
            li.removeChild(labelSpan)
        }
    }

    //#endregion

    //#region normal tab rendering
    private createTab(tab: Tab, index: number) {
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")

        const wrapperDiv = document.createElement("div")
        wrapperDiv.classList.add("my-tabstrip-li-wrapper")
        wrapperDiv.onclick = (event) => {
            this.onTabClick(event, tab.id, index, tab)
        }

        const contentDiv = document.createElement("div")
        contentDiv.classList.add("my-tabstrip-li-content")

        const a = document.createElement("a")
        a.classList.add("my-tabstrip-li-a")
        contentDiv.append(a)

        wrapperDiv.append(contentDiv)
        li.append(wrapperDiv)

        this.updateTab(li, tab, index)
        return li
    }

    private updateTab(li: HTMLLIElement, tab: Tab, index: number) {
        if (index > 0) {
            if (this.isVertical) {
                li.style.marginTop = `${this.tabSpacing}px`
            } else {
                li.style.marginLeft = `${this.tabSpacing}px`
            }
        }
        const wrapperDiv: HTMLElement = li.querySelector(".my-tabstrip-li-wrapper")
        const contentDiv: HTMLElement = wrapperDiv.querySelector(".my-tabstrip-li-content")
        const a: HTMLElement = contentDiv.querySelector("a")

        if (this.isCompact) {
            li.classList.add("my-tabstrip-li-compact")
            contentDiv.classList.add("my-tabstrip-li-content-compact")
            a.classList.add("my-tabstrip-li-a-compact")
        } else {
            li.classList.remove("my-tabstrip-li-compact")
            contentDiv.classList.remove("my-tabstrip-li-content-compact")
            a.classList.remove("my-tabstrip-li-a-compact")
        }

        // li
        li.style.backgroundColor = this.tabBackgroundColor
        li.style.borderRadius = `${this.tabBorderRadius}px`
        li.style.borderWidth = `${this.tabBorderSize}px`
        if (this.tabBorderSize > 0) {
            li.style.borderStyle = "solid"
            li.style.borderColor = this.tabBorderColor
        }
        if (this.isCompact) {
            const tabSize = this.tabSize
            li.style.width = `${tabSize}px`
            li.style.height = `${tabSize}px`
            li.style.minWidth = `${tabSize}px`
            li.style.minHeight = `${tabSize}px`
        } else {
            if (this.tabSize > 0) {
                li.style[this.isVertical ? "height" : "width"] = `${this.tabSize}px`
                li.style[this.isVertical ? "width" : "height"] = "initial"
            } else {
                li.style[this.isVertical ? "minHeight" : "minWidth"] = `${this.tabMinSize}px`
                li.style[this.isVertical ? "maxHeight" : "maxWidth"] = `${this.tabMaxSize}px`
            }
        }

        // wrapper
        wrapperDiv.style.borderRadius = `${this.tabBorderRadius}px`
        if (this.isCompact) {
            wrapperDiv.style.padding = "0"
        } else {
            wrapperDiv.style.padding = `${this.tabPaddingVert}px ${this.tabPaddingHorz}px`
            wrapperDiv.style.paddingRight = `${this.tabBorderRadius}px`
        }

        if (this.isCompact) {
            this.removeSubtitle(contentDiv)
            a.innerText = tab.getShortTitle()
        } else {
            if (tab.subtitle) {
                this.createSubtitle(contentDiv, tab)
            } else {
                this.removeSubtitle(contentDiv)
            }
            a.innerText = tab.title
        }

        if (tab.active) {
            this.updateTabActive(li, tab, index)
        } else {
            this.updateTabInactive(li, tab, index)
        }

        this.updateTabCloseIcon(li, tab, index)
    }

    private updateTabCloseIcon(li: HTMLLIElement, tab: Tab, index: number) {
        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")

        const closeIcon = li.getElementsByClassName("my-tabstrip-li-close-icon")[0]
        if (closeIcon) {
            closeIcon.parentElement.removeChild(closeIcon)
        }

        if (this.canCloseTab && tab.canClose && tab.active) {
            if (this.isCompact) {
                li.append(this.createCloseIcon(tab, index))
            } else {
                wrapperDiv.append(this.createCloseIcon(tab, index))
            }
        }
    }

    private updateTabActive(li: HTMLLIElement, tab: Tab, index: number) {
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

        // Update subtitle color for active state
        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")
        const subtitleSpan = wrapperDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            subtitleSpan.classList.add("active")
        }
    }

    private updateTabInactive(li: HTMLLIElement, tab: Tab, index: number) {
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

        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")
        const subtitleSpan = wrapperDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            subtitleSpan.classList.remove("active")
        }
    }

    private createSubtitle(contentDiv: Element, tab: Tab) {
        let subtitleSpan = contentDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0] as HTMLSpanElement
        if (!subtitleSpan) {
            subtitleSpan = document.createElement("span")
            subtitleSpan.classList.add("my-tabstrip-li-subtitle")
            const a: HTMLElement = contentDiv.querySelector("a")
            contentDiv.insertBefore(subtitleSpan, a)
        }
        subtitleSpan.innerText = tab.subtitle
    }

    private removeSubtitle(contentDiv: Element) {
        const subtitleSpan = contentDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            contentDiv.removeChild(subtitleSpan)
        }
    }

    private createCloseIcon(tab: Tab, index: number) {
        const closeIcon = document.createElement("span")
        closeIcon.classList.add("my-tabstrip-li-icon")
        closeIcon.classList.add("my-tabstrip-li-close-icon")
        if (this.isCompact) {
            closeIcon.classList.add("my-tabstrip-li-close-icon-compact")
        }

        closeIcon.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
        `
        if (tab.active) {
            closeIcon.style.color = this.activeTabTextColor
            closeIcon.style.borderColor = this.activeTabTextColor
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
    //#endregion
}
