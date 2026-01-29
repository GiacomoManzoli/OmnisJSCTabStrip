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
        let words = this.title
            .trim()
            .split(/\s+/)
            .map((w) => w.replace(/[^a-zA-ZàèéìòùÀÈÉÌÒÙ]/g, ""))
            .filter(Boolean)

        const stopWords = ["di", "da", "del", "della", "e", "il", "lo", "la", "i", "gli", "le"]

        if (words.length > 1) {
            words = words.filter((w) => !stopWords.includes(w.toLowerCase()))
        }

        if (words.length === 0) return ""

        if (words.length === 1) {
            return words[0].slice(0, 2)
        }

        return words
            .slice(0, 3)
            .map((w) => w[0])
            .join("")
        // return this.title.match(/[A-Z]/g)?.join("") || ""
    }
}
