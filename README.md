# ilw-icon-panel

Links: **[ilw-icon-panel in Builder](https://builder3.toolkit.illinois.edu/component/ilw-icon-panel/index.html)** |
[Illinois Web Theme](https://webtheme.illinois.edu/) |
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The icon panel is a panel of highlighted content that fits well among paragraphs of text. It is
essentially a smaller version of a Call to Action panel with an icon.

It can be used either as a prominent link with a description attached, or with a heading and content.

The icon always stays on the left side of the panel, even on mobile devices. The size of the icon
is reduced and the spacing is tightened to fit the smaller screen.

### Icon

The icon is placed into the `icon` slot.

The icon panel is intended to use the [ilw-icon](https://github.com/web-illinois/ilw-icon) component
for placing the icons, but it can also use an `<img>` tag or any other method of displaying an icon.

### Attributes

- `theme="orange"` uses orange for the accent.

## Code Examples

### With a link and description

```html
<ilw-icon-panel>
    <ilw-icon slot="icon" icon="resources"></ilw-icon>
    <a href="#">Graduate College Handbook (PDF)</a>
    <p>Complete details of academic policies and requirements pertaining to graduate students as well as administrative
        policy for programs, units and staff.</p>
</ilw-icon-panel>
```
### With a heading and content

```html
<ilw-icon-panel>
    <ilw-icon slot="icon" icon="students"></ilw-icon>
    <h3>Support success at all stages of the student lifecycle</h3>
    <p><strong>Our commitment to student success begins from day one.</strong></p>
    <p>Complete details of academic policies and requirements pertaining to graduate students as well as administrative
      policy for programs, units and staff.</p>
</ilw-icon-panel>
```

## Accessibility Notes and Use

Keep the following in mind when using the icon panel:

- The icon itself is decorative, so should be marked as such with `aria-hidden="true"`. Note that
  `ilw-icon` does this automatically.
- If using a heading, make sure it fits into the page's heading structure.

## External References

None.
