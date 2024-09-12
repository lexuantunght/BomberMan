class Splash {
    constructor(props = {}) {
        this.progress = 0;
        this.domNode = null;
        this.domIndicator = null;
        this.indicatorColor = props.indicatorColor || '#fff';
        this.backgroundColor = props.backgroundColor || '#333';
        this.backgroundImage = props.backgroundImage;
    }

    signalProgress(value) {
        this.progress = value;
        if (this.domIndicator) {
            this.domIndicator.style.width = `${this.progress * 100}%`;
        }
    }

    render() {
        const splash = document.createElement('div');
        const progress = document.createElement('div');
        const progressIndicator = document.createElement('div');
        progress.appendChild(progressIndicator);
        splash.appendChild(progress);

        splash.style.position = 'fixed';
        splash.style.width = '100%';
        splash.style.height = '100%';
        if (this.backgroundImage) {
            splash.style.backgroundImage = `url(${this.backgroundImage})`;
        }
        splash.style.backgroundColor = this.backgroundColor;
        progress.style.position = 'relative';
        progress.style.height = '8px';
        progress.style.borderRadius = '4px';
        progress.style.border = `0.5px solid ${this.indicatorColor}`;
        progressIndicator.style.position = 'absolute';
        progressIndicator.style.backgroundColor = this.indicatorColor;
        progressIndicator.style.height = '100%';
        progressIndicator.style.width = `${this.progress * 100}%`;
        progressIndicator.style.transition = 'width 0.3s';

        this.domNode = splash;
        this.domIndicator = progressIndicator;
        document.body.appendChild(this.domNode);
        return this.domNode;
    }

    close() {
        if (this.domNode) {
            document.body.removeChild(this.domNode);
            this.domNode = null;
            this.domIndicator = null;
        }
    }
}

export default Splash;
