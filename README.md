# Scandit App



## Getting started

We downloaded app from your repo https://github.com/Scandit/datacapture-capacitor-samples

We tested BarcodeCaptureViewsSample app because we targeted [ionic]Capacitor framwork

But we found an issue when we moved from feature to another, Please see the attached video on repo called [video_issue.MOV]

## The reason of crash app is this line.
ngOnDestroy() {
    this.context.dispose();
}

When we comment this line [this.context.dispose()] app works but it make hesitation,
Becasue when we move from feature to another the session of context not ended,
So it displays the alert from [Full_screen_page] inside [Split_screen_page].



## The end
We uploaded every thing to allow you test [code] [android] [ios] [video_issue]
