import { Browser1Component } from "./Project1/browser1/browser1.component"
import { FakeICBrowserComponent } from "./Project1/fake-icbrowser/fake-icbrowser.component";
export let ProjectsRegistry = new Map(
    Object.entries({
        'browser1': Browser1Component,
        'fakeicbrowser': FakeICBrowserComponent
    })
);