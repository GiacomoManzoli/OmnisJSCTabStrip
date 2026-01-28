import { TabStrip, Tab } from "./TabStrip"

// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    // <OmnisUpdateMarker_PropertyConstants_Begin>
    autoupdate: "$autoupdate",
    canclosetab: "$canclosetab",
    canaddtab: "$canaddtab",
    backgroundcolor: "$backgroundcolor",
    activetabbackgroundcolor: "$activetabbackgroundcolor",
    tabbackgroundcolor: "$tabbackgroundcolor",
    tabbordercolor: "$tabbordercolor",
    tabtextcolor: "$tabtextcolor",
    activetabtextcolor: "$activetabtextcolor",
    tabborderradius: "$tabborderradius",
    tabspacing: "$tabspacing",
    tabbordersize: "$tabbordersize",
    tabminsize: "$tabminsize",
    tabmaxsize: "$tabmaxsize",
    tabsize: "$tabsize",
    tabpaddinghorz: "$tabpaddinghorz",
    tabpaddingvert: "$tabpaddingvert",
    addtabsymbolcolor: "$addtabsymbolcolor",
    addtabbackgroundcolor: "$addtabbackgroundcolor",
    addtabtext: "$addtabtext",
    isvertical: "$isvertical",
    // <OmnisUpdateMarker_PropertyConstants_End>
}

var EVENTS = {
    evTabClose: 1,
    evTabAdd: 2,
    evTabClick: 3,
}

export class ctrl_com_888sp_tabstrip extends ctrl_base {
    tabStrip: TabStrip
    autoUpdate: boolean = false

    constructor() {
        super()
        this.init_class_inst() // initialize our class
    }

    init_ctrl_inst(form, elem, rowCtrl, rowNumber) {
        super.init_ctrl_inst(form, elem, rowCtrl, rowNumber)

        var client_elem = this.getClientElem()

        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"))

        this.initTabStrip(client_elem)

        console.log("init_ctrl_inst")

        for (let propName in PROPERTIES) {
            console.log("set prop: ",propName)
            const propValue = datapropsobj[propName] // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue)
        }

         console.log("this.update()")

        this.update()

        return false
    }

    updateCtrl(what, row, col, mustUpdate) {
        var elem = this.getClientElem()
        // center the text vertically:
        elem.style.lineHeight = elem.style.height
        elem.style.textAlign = "center"

        // read $dataname value and display in control
        const dataname = this.getData()
        const datanameList = new omnis_list(dataname)

        console.log("updateCtrl")

        this.mData = dataname

        if (dataname) {
            let tabs: Tab[] = []
            const currentLine = datanameList.getCurrentRow()
            const activeLine = currentLine > 0 ? currentLine : 1

            for (let index = 1; index <= datanameList.getRowCount(); index++) {
                let t = new Tab({
                    id: datanameList.getData("id", index),
                    title: datanameList.getData("title", index),
                    subtitle: datanameList.getData("subtitle", index)
                })

                t.active = index == activeLine
                t.activeColor = datanameList.getData("activeColor", index)
                t.canClose = datanameList.getData("canClose", index)
                t.backcolorOverride = datanameList.getData("backcolorOverride", index)
                t.backcolorOverrideActive = datanameList.getData("backcolorOverrideActive", index)
                t.bordercolorOverride = datanameList.getData("bordercolorOverride", index)
                t.bordercolorOverrideActive = datanameList.getData("bordercolorOverrideActive", index)
                t.textcolorOverride = datanameList.getData("textcolorOverride", index)
                t.textcolorOverrideActive = datanameList.getData("textcolorOverrideActive", index)

                tabs.push(t)
            }
            this.tabStrip.setTabs(tabs)
            this.tabStrip.render()
        } else {
            elem.innerHTML = "TABSTRIP"
        }
    }

    /**
     * This is called when an event registered using this.mEventFunction() is triggered.
     *
     * @param event The event object
     */
    handleEvent(event: any) {
        if (!this.isEnabled()) return true // If the control is disabled, don't process the event.

        switch (event.type) {
            case "click":
                return true
            // case "touchstart":
            //     this.lastTouch = new Date().getTime() // Note the time of the touch start.
            //     this.touchStartPos = {
            //         x: event.changedTouches0.clientX,
            //         y: event.changedTouches0.clientY,
            //     } // Note the starting position of the touch.
            //     break
            // case "touchend":
            //     var time = new Date().getTime()
            //     if (time - this.lastTouch < 500) {
            //         //Treat as a click if less than 500ms have elapsed since touchstart
            //         if (touchWithinRange(this.touchStartPos, event.changedTouches0, 20)) {
            //             //Only treat as a click if less than 20 pixels have been scrolled.
            //             return this.handleClick(event.changedTouches0.offsetX, event.changedTouches0.offsetY)
            //         }
            //     }
            //     break
        }

        super.handleEvent(event)
    }

    getCanAssign(propNumber: number | string) {
        return Object.values(PROPERTIES).includes(propNumber.toString()) || super.getCanAssign(propNumber)
    }

    setProperty(propNumber: number | string, propValue: any) {
        if (!this.getCanAssign(propNumber)) {
            return false
        }

        if (propNumber) {
            switch (propNumber) {
                // Main control
                case PROPERTIES.backgroundcolor:
                    this.tabStrip.backgroundColor = this.getTheme().getColorString(propValue)
                    return true
                // ADD TAB
                case PROPERTIES.addtabbackgroundcolor:
                    this.tabStrip.addTabBackgroundColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.addtabsymbolcolor:
                    this.tabStrip.addTabSymbolColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.addtabtext:
                    this.tabStrip.addTabText = propValue as string
                    return true
                // Active TAB
                case PROPERTIES.activetabbackgroundcolor:
                    this.tabStrip.activeTabBackgroundColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.activetabtextcolor:
                    this.tabStrip.activeTabTextColor = this.getTheme().getColorString(propValue) as string
                    return true
                // TAB
                case PROPERTIES.isvertical:
                    console.log(`Imposto isvetical ${propValue}`)
                    this.tabStrip.isVertical = propValue as boolean
                    return true
                case PROPERTIES.tabbackgroundcolor:
                    this.tabStrip.tabBackgroundColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.tabtextcolor:
                    this.tabStrip.textColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.tabbordercolor:
                    this.tabStrip.tabBorderColor = this.getTheme().getColorString(propValue) as string
                    return true
                case PROPERTIES.tabbordersize:
                    this.tabStrip.tabBorderSize = propValue as number
                    return true
                case PROPERTIES.tabborderradius:
                    this.tabStrip.tabBorderRadius = propValue as number
                    return true
                case PROPERTIES.tabspacing:
                    this.tabStrip.tabSpacing = propValue as number
                    return true
                case PROPERTIES.tabsize:
                    this.tabStrip.tabSize = propValue as number
                    return true
                case PROPERTIES.tabmaxsize:
                    this.tabStrip.tabMaxSize = propValue as number
                    return true
                case PROPERTIES.tabminsize:
                    this.tabStrip.tabMinSize = propValue as number
                    return true
                case PROPERTIES.tabpaddinghorz:
                    this.tabStrip.tabPaddingHorz = propValue as number
                    return true
                case PROPERTIES.tabpaddingvert:
                    this.tabStrip.tabPaddingVert = propValue as number
                    return true
                // BEHAVIOR
                case PROPERTIES.canaddtab:
                    // Forzo il rerendering del componente al cambio della proprietà
                    this.tabStrip.setCanAddTab(propValue as boolean)
                    return true
                case PROPERTIES.canclosetab:
                    this.tabStrip.canCloseTab = propValue as boolean
                    return true
                case PROPERTIES.autoupdate:
                    this.autoUpdate = propValue as boolean
                    return true
            }
        }

        return super.setProperty(propNumber, propValue)
    }

    getProperty(propNumber: string | number) {
        switch (propNumber) {
            // Main control
            case PROPERTIES.backgroundcolor:
                return this.tabStrip.backgroundColor
            // ADD TAB
            case PROPERTIES.addtabbackgroundcolor:
                return this.tabStrip.addTabBackgroundColor
            case PROPERTIES.addtabsymbolcolor:
                return this.tabStrip.addTabSymbolColor
            case PROPERTIES.addtabtext:
                return this.tabStrip.addTabText
            // Active TAB
            case PROPERTIES.activetabbackgroundcolor:
                return this.tabStrip.activeTabBackgroundColor
            case PROPERTIES.activetabtextcolor:
                return this.tabStrip.activeTabTextColor
            // TAB
            case PROPERTIES.isvertical:
                return this.tabStrip.isVertical
            case PROPERTIES.tabbackgroundcolor:
                return this.tabStrip.tabBackgroundColor
            case PROPERTIES.tabtextcolor:
                return this.tabStrip.textColor
            case PROPERTIES.tabbordercolor:
                return this.tabStrip.tabBorderColor
            case PROPERTIES.tabbordersize:
                return this.tabStrip.tabBorderSize
            case PROPERTIES.tabborderradius:
                return this.tabStrip.tabBorderRadius
            case PROPERTIES.tabspacing:
                return this.tabStrip.tabSpacing
            case PROPERTIES.tabsize:
                return this.tabStrip.tabSize
            case PROPERTIES.tabmaxsize:
                return this.tabStrip.tabMaxSize
            case PROPERTIES.tabminsize:
                return this.tabStrip.tabMinSize
            case PROPERTIES.tabpaddinghorz:
                return this.tabStrip.tabPaddingHorz
            case PROPERTIES.tabpaddingvert:
                return this.tabStrip.tabPaddingVert
            // BEHAVIOR
            case PROPERTIES.canaddtab:
                return this.tabStrip.canAddTab
            case PROPERTIES.canclosetab:
                return this.tabStrip.canCloseTab
            case PROPERTIES.autoupdate:
                return this.autoUpdate
        }

        return super.getProperty(propNumber)
    }

    private initTabStrip(client_elem) {
        this.tabStrip = new TabStrip(client_elem)

        // this.tabStrip.setJOmnisEffects(jOmnisEffects)
        // this.tabStrip.setOmnisTheme(this.getTheme())

        this.tabStrip.addEventListener("tabclick", (event, id, index, tab) => {
            if (this.autoUpdate) {
                this.tabStrip.setActive(id)
            }
            if (this.canSendEvent(EVENTS.evTabClick)) {
                this.eventParamsAdd("pTabNum", index + 1)
                this.sendEvent("evTabClick")
            }
        })

        this.tabStrip.addEventListener("tabclose", (event, id, index, tab) => {
            if (this.autoUpdate) {
                this.tabStrip.closeTab(id)
            }
            if (this.canSendEvent(EVENTS.evTabClose)) {
                this.eventParamsAdd("pTabNum", index + 1)
                this.sendEvent("evTabClose")
            }
        })

        this.tabStrip.addEventListener("tabadd", (event) => {
            if (this.autoUpdate) {
                const tab = this.tabStrip.addTab()
                const datanameList = new omnis_list(this.mData)
                const rowIndex = datanameList.addRow(0, datanameList.getColumnCount())
                datanameList.setData("id", rowIndex, tab.id)
                datanameList.setData("title", rowIndex, tab.title)
                datanameList.setCurrentRow(rowIndex)
            }
            if (this.canSendEvent(EVENTS.evTabAdd)) {
                this.sendEvent("evTabAdd")
            }
        })
    }

    // /**
    //  * Assigns the specified property's value to the control.
    //  * @param propNumber    The Omnis property number
    //  * @param propValue     The new value for the property
    //  * @returns {boolean}   success
    //  */
    // handleClick(pX, pY) {
    //     // send event to Omnis
    //     if (this.canSendEvent(eBaseEvent.evClick)) {
    //         this.eventParamsAdd("pXPos", pX)
    //         this.eventParamsAdd("pYPos", pY)

    //         this.sendEvent(eBaseEvent.evClick)
    //     }
    // }

    // /**
    //  * Called when the size of the control has changed.
    //  */
    // sizeChanged() {
    //     super.sizeChanged()

    //     // // center any text vertically
    //     // var elem = this.getClientElem()
    //     // elem.style.lineHeight = elem.style.height
    // }
}

//  // send event to Omnis
//  if (this.canSendEvent(eBaseEvent.evClick)) {
//     this.eventParamsAdd("pXPos", pX)
//     this.eventParamsAdd("pYPos", pY)

//     this.sendEvent(eBaseEvent.evClick)
// }
