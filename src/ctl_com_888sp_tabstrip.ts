export function foo() {
    console.log("Foo")
}

import { TabStrip, CssVar } from "./TabStrip"

// import "./style.css"

/****** CONSTANTS ******/
var PROPERTIES = {
    autoupdate: "$autoupdate",
    canclosetab: "$canclosetab",
    canaddtab: "$canaddtab",
    activecolor: "$activecolor",
    backgroundcolor: "$backgroundcolor",
    backgroundtabactivecoloractive: "$backgroundtabactivecoloractive",
    backgroundtabcolor: "$backgroundtabcolor",
    bordercolor: "$bordercolor",
    textcolor: "$textcolor",
    textactivecolor: "$textactivecolor",
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

        //Control-specific initialization:
        var client_elem = this.getClientElem()
        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"))

        this.tabStrip = new TabStrip(client_elem)

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
                // const tab = this.tabStrip.addTab()
                // const datanameList = new omnis_list(this.mData)
                // const rowIndex = datanameList.addRow(0, datanameList.getColumnCount())
                // datanameList.setData("id", rowIndex, tab.id)
                // datanameList.setData("title", rowIndex, tab.title)
                // datanameList.setCurrentRow(rowIndex)
            }
            if (this.canSendEvent(EVENTS.evTabAdd)) {
                this.sendEvent("evTabAdd")
            }
        })

        for (let propName in PROPERTIES) {
            const propValue = datapropsobj[propName] // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue)
        }

        this.update()

        return false
    }

    updateCtrl(what, row, col, mustUpdate) {
        var elem = this.getClientElem()
        console.log("update", arguments)
        // center the text vertically:
        elem.style.lineHeight = elem.style.height
        elem.style.textAlign = "center"

        // read $dataname value and display in control
        const dataname = this.getData()
        const datanameList = new omnis_list(dataname)

        this.mData = dataname
        elem.innerHTML = ""
        if (dataname) {
            let tabs = []
            const currentLine = datanameList.getCurrentRow()
            const activeLine = currentLine > 0 ? currentLine : 1
            console.log(currentLine, activeLine)
            for (let index = 1; index <= datanameList.getRowCount(); index++) {
                tabs.push({
                    id: datanameList.getData("id", index),
                    title: datanameList.getData("title", index),
                    active: index == activeLine,
                })
            }
            console.log(tabs)

            this.tabStrip.setTabs(tabs)
            this.tabStrip.render()
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
                case PROPERTIES.activecolor:
                    this.tabStrip.setCssVar(CssVar.activeColor, propValue)
                    return true
                case PROPERTIES.backgroundcolor:
                    this.tabStrip.setCssVar(CssVar.backgroundColor, propValue)
                    return true
                case PROPERTIES.backgroundtabactivecoloractive:
                    this.tabStrip.setCssVar(CssVar.backgroundTabActiveColor, propValue)
                    return true
                case PROPERTIES.backgroundtabcolor:
                    this.tabStrip.setCssVar(CssVar.backgroundTabColor, propValue)
                    return true
                case PROPERTIES.textactivecolor:
                    this.tabStrip.setCssVar(CssVar.textActiveColor, propValue)
                    return true
                case PROPERTIES.textcolor:
                    this.tabStrip.setCssVar(CssVar.textColor, propValue)
                    return true
                case PROPERTIES.bordercolor:
                    this.tabStrip.setCssVar(CssVar.borderColor, propValue)
                    return true
                case PROPERTIES.canaddtab:
                    this.tabStrip.canAddTab = propValue as boolean
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
            // stile
            case PROPERTIES.activecolor:
                return this.tabStrip.getCssVar(CssVar.activeColor)
            case PROPERTIES.backgroundcolor:
                return this.tabStrip.getCssVar(CssVar.backgroundColor)
            case PROPERTIES.backgroundtabactivecoloractive:
                return this.tabStrip.getCssVar(CssVar.backgroundTabActiveColor)
            case PROPERTIES.backgroundtabcolor:
                return this.tabStrip.getCssVar(CssVar.backgroundTabColor)
            case PROPERTIES.textactivecolor:
                return this.tabStrip.getCssVar(CssVar.textActiveColor)
            case PROPERTIES.textcolor:
                return this.tabStrip.getCssVar(CssVar.textColor)
            case PROPERTIES.bordercolor:
                return this.tabStrip.getCssVar(CssVar.borderColor)
            // props comportamentali
            case PROPERTIES.canaddtab:
                return this.tabStrip.canAddTab
            case PROPERTIES.canclosetab:
                return this.tabStrip.canCloseTab
            // props di questo oggetto

            case PROPERTIES.autoupdate:
                return this.autoUpdate
        }

        return super.getProperty(propNumber)
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
