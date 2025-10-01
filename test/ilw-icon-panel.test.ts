import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-icon-panel";

const content = html`
    <ilw-icon-panel>
        <svg slot="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
            <path fill="currentColor" d="M38.75 36.27h.07a.71.71 0 0 0 .71-.71V8.44a.71.71 0 0 0-.71-.71H14.2a3.13 3.13 0 0 0-2.47 3.34V39.6v-.39c.13 2 1.54 3.68 3.26 3.68h23.76a.7.7 0 1 0 0-1.39c-1 0-1.9-1.17-1.9-2.6s.87-2.63 1.9-2.63ZM34.9 8.88v10.39l-3-2.1-3 2.15V8.88ZM15 41.5c-1 0-1.9-1.17-1.9-2.6s.9-2.59 1.9-2.59h21.29a4.6 4.6 0 0 0 0 5.23Z"/>
        </svg>
        <a href="#2" slot="link">Graduate College Handbook (PDF)</a>
        <p>Complete details of academic policies and requirements pertaining to graduate students as well as administrative
            policy for programs, units and staff.</p>
    </ilw-icon-panel>
`;

test("Renders link", async () => {
    const screen = render(content);
    const element = screen.getByText("Graduate College Handbook (PDF)");
    await expect.element(element).toBeVisible();
});