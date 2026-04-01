import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private injectedScriptIds = ['hendon-menu-data-script', 'hendon-legacy-script'];

  ngAfterViewInit(): void {
    this.loadScript('hendon-menu-data-script', 'assets/data/menu-data.js')
      .then(() => this.loadScript('hendon-legacy-script', 'assets/legacy/script.js'))
      .catch((error) => console.error('Legacy bootstrap failed', error));
  }

  ngOnDestroy(): void {
    this.injectedScriptIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.remove();
    });
  }

  private loadScript(id: string, src: string): Promise<void> {
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    });
  }
}
