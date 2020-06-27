import percySnapshot from '@percy/testcafe';

import { BASE_URL, testURLs } from '../config/testURLs.data';

fixture('Page Loop Test Example');

testURLs.forEach((URL) => {
  test(`Page: ${BASE_URL}${URL}`, async (browser) => {
    await browser.navigateTo(`${BASE_URL}${URL}`);
    await percySnapshot(browser, `Page: ${BASE_URL}${URL}`);
  });
});
