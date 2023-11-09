import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import {
   provideRouter,
   withEnabledBlockingInitialNavigation,
} from '@angular/router'
import { appRoutes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http'

// import ngx-translate and the http loader
import { HttpClient } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

export const appConfig: ApplicationConfig = {
   providers: [
      provideAnimations(),
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      provideHttpClient(),
      importProvidersFrom(
         TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
               provide: TranslateLoader,
               useFactory: createTranslateLoader,
               deps: [HttpClient],
            },
         })
      ),
   ],
}
