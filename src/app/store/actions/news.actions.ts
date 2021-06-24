import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { News } from '../../model/news';

@Injectable()
export class NewsActions {
    static CURRENT_NEWS_SECTION = '[News App] Current News Section',
    static LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
    static FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';
    static LOAD_SECTION_NEWS_SUCCESS = '[News App] Load Section News Success',
    static LOAD_SECTION_NEWS_FAILURE = '[News App] Load Section News Failure',
    LoadSectionNews(list: News[]): Action {
        return {
            type: '',
            payload: ''
        };
    }
    FilterSubsection(subsection: string): Action {
        return {
            type: '',
            payload: ''
        };
    }
}
