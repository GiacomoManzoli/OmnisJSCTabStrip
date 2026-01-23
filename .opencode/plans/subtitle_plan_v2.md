# Plan: Add Subtitle Field to TabStrip

## Overview

Add a subtitle field to each tab in the TabStrip component, rendered above the title with smaller font. The special "ADD_TAB" should not have a subtitle.

## Changes Required

### 1. Tab Class (src/TabStrip.ts:2-47)

**Add subtitle field:**

```typescript
subtitle?: string  // Add after title property (line 3)
```

**Update constructor (lines 15-22):**

```typescript
constructor(data: { id?: number; title?: string; subtitle?: string }) {
    if (data.id) {
        this.id = data.id
    }
    if (data.title) {
        this.title = data.title
    }
    if (data.subtitle) {  // NEW
        this.subtitle = data.subtitle
    }
}
```

### 2. CSS Styles (src/style.css)

**Add new styles for subtitle:**

```css
.my-tabstrip-li-subtitle {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.my-tabstrip-li-subtitle.active {
  color: rgba(255, 255, 255, 0.8);
}

.my-tabstrip-li-content {
  display: flex;
  flex-direction: column;
}
```

### 3. DOM Structure Changes

**Current structure:**

```html
<li class="my-tabstrip-li">
  <a class="my-tabstrip-li-a">Title</a>
  <span class="close-icon">×</span>
</li>
```

**New structure:**

```html
<li class="my-tabstrip-li">
  <div class="my-tabstrip-li-content">
    <span class="my-tabstrip-li-subtitle">Subtitle</span>
    <a class="my-tabstrip-li-a">Title</a>
  </div>
  <span class="close-icon">×</span>
</li>
```

### 4. createTab Method (lines 311-344)

**Modify to add subtitle container:**

```typescript
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

    const contentDiv = document.createElement("div")  // NEW
    contentDiv.classList.add("my-tabstrip-li-content")

    const a = document.createElement("a")
    a.classList.add("my-tabstrip-li-a")
    contentDiv.append(a)  // Changed from li.append(a)

    this.updateItem(li, tab, index)  // This will now add subtitle

    return li
}
```

### 5. updateItem Method (lines 346-372)

**Add subtitle rendering logic:**

```typescript
private updateItem(li: HTMLLIElement, tab: Tab, index: number) {
    // Spacing between tabs
    if (index > 0) {
        li.style.marginLeft = `${this.tabSpacing}px`
    }

    const contentDiv = li.querySelector(".my-tabstrip-li-content")  // Changed
    const a = contentDiv.querySelector("a")  // Changed

    // Add subtitle above title (NEW)
    if (tab.subtitle && tab.id !== -1) {  // Exclude ADD_TAB
        let subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (!subtitleSpan) {
            subtitleSpan = document.createElement("span")
            subtitleSpan.classList.add("my-tabstrip-li-subtitle")
            contentDiv.insertBefore(subtitleSpan, a)
        }
        subtitleSpan.innerText = tab.subtitle
    } else {
        // Remove subtitle if it exists
        const subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0]
        if (subtitleSpan) {
            contentDiv.removeChild(subtitleSpan)
        }
    }

    a.innerText = tab.title

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
```

### 6. updateItemActive Method (lines 374-396)

**Update subtitle color for active state:**

```typescript
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

    // Update subtitle color for active state (NEW)
    const subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0]
    if (subtitleSpan) {
        subtitleSpan.classList.add("active")
    }
}
```

### 7. updateItemInactive Method (lines 398-417)

**Remove active class from subtitle:**

```typescript
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

    // Remove active class from subtitle (NEW)
    const subtitleSpan = li.getElementsByClassName("my-tabstrip-li-subtitle")[0]
    if (subtitleSpan) {
        subtitleSpan.classList.remove("active")
    }
}
```

## Implementation Order

1. Add subtitle field to Tab class
2. Update Tab constructor
3. Add CSS styles for subtitle
4. Modify createTab to add content div
5. Update updateItem to render subtitle
6. Update updateItemActive for subtitle styling
7. Update updateItemInactive for subtitle styling
8. Test the implementation

## Testing Considerations

- Verify subtitle appears above title
- Verify subtitle has smaller font size
- Verify ADD_TAB does not have subtitle
- Verify subtitle color changes with active state
- Verify subtitle is removed when tab doesn't have one
- Test with various title and subtitle lengths
