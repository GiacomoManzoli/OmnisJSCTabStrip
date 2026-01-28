export class Tab {
    id: number = 0
    title: string = ""
    subtitle?: string
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

    constructor(data: { id?: number; title?: string; subtitle?: string }) {
        if (data.id) {
            this.id = data.id
        }
        if (data.title) {
            this.title = data.title
        }
        if (data.subtitle) {
            this.subtitle = data.subtitle
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

    getShortTitle(): string {
        return (this.id).toString()
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
        
        let leftPos: string, topPos: string
        if (this.isVertical) {
            // For vertical layout, use getBoundingClientRect for more accurate positioning
            const rect = button.getBoundingClientRect()
            leftPos = `${event.clientX - rect.left - radius}px`
            topPos = `${event.clientY - rect.top - radius}px`
            // console.log(`Vertical ripple: clientX=${event.clientX}, clientY=${event.clientY}, rect.left=${rect.left}, rect.top=${rect.top}, radius=${radius}`)
            // console.log(`Vertical ripple: leftPos=${leftPos}, topPos=${topPos}`)
        } else {
            // For horizontal layout, use the original positioning
            leftPos = `${event.clientX - (button.offsetLeft + radius)}px`
            topPos = `${event.clientY - (button.offsetTop + radius)}px`
        }
        
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
        console.log("render", this.tabs)
        // Inserts/updates
        for (let index = this.tabs.length - 1; index >= 0; index--) {
            let currTab = this.tabs[index]
            if (this.renderedTabs.has(currTab.id)) {
                let { tab, li } = this.renderedTabs.get(currTab.id)

                if (tab.id != ADD_TAB.id) {
                    this.updateItem(li, currTab, index)
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
        console.log("createAddtab")
        const li = document.createElement("li")
        li.classList.add("my-tabstrip-li")
        li.classList.add("action-add")
        this.updateAddTab(li, tab, index)
        
        // Add event listener to the entire li element
        li.addEventListener("click", (event) => {
            this.onTabAddClick(event, tab.id, index, tab)
        })
        
        return li
    }

    private updateAddTab(li: HTMLLIElement, tab: Tab, index: number)  {
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
        
        li.innerHTML =""
        const a = document.createElement("a")
        a.innerHTML = "+" //+ "&#10006;" + "&#x2715;"
        
        li.append(a)

        if (this.isVertical && !this.isCompact) {
            // Label visible only in the vertical layout (non-compact)
            const labelSpan = document.createElement("span")
            labelSpan.classList.add("my-tabstrip-add-label")
            labelSpan.innerText = this.addTabText
            li.append(labelSpan)
        } else {
            // Remove label in compact mode or horizontal mode
            const labelSpan = li.getElementsByClassName("my-tabstrip-add-label")[0]
            if (labelSpan) {
                li.removeChild(labelSpan)    
            }
        }
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
        if (this.isCompact) {
            li.classList.add("my-tabstrip-li-compact")
        }

        // Position the li relative for absolute positioning of close icon
        li.style.position = "relative"
        
        // Tab size
        if (this.isCompact) {
            // Compact vertical: square tabs with fixed size
            const tabSize = this.tabSize
            li.style.width = `${tabSize}px`
            li.style.height = `${tabSize}px`
            li.style.minWidth = `${tabSize}px`
            li.style.minHeight = `${tabSize}px`
            li.style.padding = "0"
        } else {
            li.style.padding = `${this.tabPaddingVert}px ${this.tabPaddingHorz}px`
            
            if (this.tabSize > 0) {
                li.style[this.isVertical ? 'height' : 'width'] = `${this.tabSize}px`
            } else {
                li.style[this.isVertical ? 'minHeight' : 'minWidth'] = `${this.tabMinSize}px`
                li.style[this.isVertical ? 'maxHeight' : 'maxWidth'] = `${this.tabMaxSize}px`
            }
        }

        li.style.backgroundColor = this.tabBackgroundColor

        // Tab border
        li.style.borderRadius = `${this.tabBorderRadius}px`
        li.style.borderWidth = `${this.tabBorderSize}px`
        if (this.tabBorderSize > 0) {
            li.style.borderStyle = "solid"
            li.style.borderColor = this.tabBorderColor
        }

        // Create a wrapper div for content that will handle overflow for ripple effect
        const wrapperDiv = document.createElement("div")
        wrapperDiv.classList.add("my-tabstrip-li-wrapper")
        wrapperDiv.style.position = "relative"
        wrapperDiv.style.overflow = "hidden"
        wrapperDiv.style.width = "100%"
        wrapperDiv.style.height = "100%"
        wrapperDiv.style.borderRadius = `${this.tabBorderRadius}px`

        const contentDiv = document.createElement("div")
        contentDiv.classList.add("my-tabstrip-li-content")
        if (this.isCompact) {
            contentDiv.classList.add("my-tabstrip-li-content-compact")
        }

        const a = document.createElement("a")
        a.classList.add("my-tabstrip-li-a")
        if (this.isCompact) {
            a.classList.add("my-tabstrip-li-a-compact")
        }
        contentDiv.append(a)

        wrapperDiv.append(contentDiv)
        li.append(wrapperDiv)
        this.updateItem(li, tab, index)

        return li
    }

    private removeSubtitle(contentDiv: Element) {
        const subtitleSpan = contentDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            contentDiv.removeChild(subtitleSpan)
        }
    }

    private updateItem(li: HTMLLIElement, tab: Tab, index: number) {        
        if (index > 0) {
            if (this.isVertical) {
                li.style.marginTop = `${this.tabSpacing}px`
            } else {
                li.style.marginLeft = `${this.tabSpacing}px`
            }
        }
        
        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")
        const contentDiv = wrapperDiv.querySelector(".my-tabstrip-li-content")
        const a = contentDiv.querySelector("a")
        
        // Handle compact mode - no subtitles, use short title
        if ( this.isCompact) {
            this.removeSubtitle(contentDiv)
            a.innerText = tab.getShortTitle()
        } else {
            // Normal mode - handle subtitles
            if (tab.subtitle) {
                let subtitleSpan = wrapperDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0] as HTMLSpanElement
                if (!subtitleSpan) {
                    subtitleSpan = document.createElement("span")
                    subtitleSpan.classList.add("my-tabstrip-li-subtitle")
                    contentDiv.insertBefore(subtitleSpan, a)
                }
                subtitleSpan.innerText = tab.subtitle
            } else {
                // Remove subtitle if it exists
                this.removeSubtitle(contentDiv)
            }
            a.innerText = tab.title
        }
        
        if (tab.active) {
            this.updateItemActive(li, tab, index)
        } else {
            this.updateItemInactive(li, tab, index)
        }
        
        // Update the wrapper click handler for ripple effect
        (wrapperDiv as HTMLElement).onclick = (event) => {
            this.onTabClick(event, tab.id, index, tab)
        }
        
        // Handle close icon - in compact mode, only show on active tab
        const closeIcon = li.getElementsByClassName("my-tabstrip-li-close-icon")[0]
        if (closeIcon) {
            li.removeChild(closeIcon)
        }
        
        if (this.canCloseTab && tab.canClose) {
            if (this.isCompact) {
                // In compact vertical mode, only show close icon on active tab
                if (tab.active) {
                    li.append(this.createCloseIcon(tab, index))
                }
            } else {
                // Normal mode - show close icon on all closable tabs
                li.append(this.createCloseIcon(tab, index))
            }
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

        // Update subtitle color for active state
        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")
        const subtitleSpan = wrapperDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            subtitleSpan.classList.add("active")
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
        // Remove active class from subtitle
        const wrapperDiv = li.querySelector(".my-tabstrip-li-wrapper")
        const subtitleSpan = wrapperDiv.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            subtitleSpan.classList.remove("active")
        }
    }

    private createCloseIcon(tab: Tab, index: number) {
        const closeIcon = document.createElement("span")
        closeIcon.classList.add("my-tabstrip-li-icon")
        closeIcon.classList.add("my-tabstrip-li-close-icon")
        
        if (this.isCompact) {
            closeIcon.classList.add("my-tabstrip-li-close-icon-compact")
        }

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

            // In compact vertical mode, position close icon as notification badge
            if (this.isCompact) {
                closeIcon.style.position = "absolute"
                closeIcon.style.top = "-6px" // Position slightly above the tab
                closeIcon.style.left = "-6px" // Position slightly to the left of the tab
                closeIcon.style.fontSize = "12px"
                closeIcon.style.padding = "2px 4px" // Add some padding to make it look like a badge
                closeIcon.style.margin = "0"
                closeIcon.style.zIndex = "10"
                closeIcon.style.borderRadius = "50%" // Make it circular like a notification badge
                closeIcon.style.width = "20px" // Fixed width for badge
                closeIcon.style.height = "20px" // Fixed height for badge
                closeIcon.style.display = "flex"
                closeIcon.style.alignItems = "center"
                closeIcon.style.justifyContent = "center"
                closeIcon.style.boxSizing = "border-box"
            }

            closeIcon.addEventListener("click", (event) => {
                this.onTabCloseClick(event, tab.id, index, tab)
            })
        }

        return closeIcon
    }
}
