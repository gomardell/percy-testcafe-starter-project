import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

import { BASE_URL } from '../config/testURLs.data';

fixture('Functional Test Example');

test('Snapshot: Expand win points text', async (browser) => {
  await browser
    .navigateTo(`${BASE_URL}/au/en.html`)
    .hover(Selector('#primary-navigation__destinations')); // Hover over the "Destinations" nav menu item
  await percySnapshot(browser, 'Snapshot: Important information');
});
