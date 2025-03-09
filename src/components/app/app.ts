import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: NewsItem) => this.view.drawNews(data))
            );
        } else {
            console.warn("Element with class 'sources' not found.");
        }

        this.controller.getSources((data: NewsItem) => this.view.drawSources(data));
    }
}

export default App;
