// @ts-check
import { html } from "lit"

/**
 * @typedef {{title: string;desc: string; id: string}} Data
 */

/**
 *@interface
 *
 */
class RepositoryInterface {
    
    /**
     * @param {Data} data 
     */
    save(data) {}
    /**
     * @param {Data['id']} id 
     * @returns { Data }
     */
    get(id) {
        throw new Error('Not implemented')
    }
}


/**
 * @implements {RepositoryInterface}
 */
export class ReduxRepository {

    /**
     *
     * @memberof ReduxRepository
     * @type {Map<string, Data>}}
     */
    data = new Map([
        ['1', {title: 'test', desc: 'test', id: '1'}],
        ['2', {title: 'test', desc: 'test', id: '2'}]
    ])

    /**
     * @param {Data} data
     */
    save(data) {
        console.log(data)
    }

    /**
     * @param { string} id 
     * @returns {Data | undefined }
     */
    get(id) {
       return this.data.get(id) 
    }

    
}


/**
 *
 *
 * @export
 * @class UIBuilder
 */
export class UIBuilder {

  /**
   * Creates an instance of UIBuilder.
   * @param {RepositoryInterface} stockRepository 
   * @memberof UIBuilder
   */
  constructor(stockRepository) {
    this.repo = stockRepository
  }

  /**
   * @public
   * @returns {import("lit").TemplateResult}
   */
  createCustomButton = () => {

    const messaegaData = this.repo.get("1");

    return html`<button class="border rounded shadow border-teal-800 text-white"> ${messaegaData?.title}</button>`
  }
    
}