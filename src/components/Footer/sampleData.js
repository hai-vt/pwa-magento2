
const accountLinks = new Map()
    .set('My Account', null)
    .set('Dashboard', '/customer/account')
    .set('Order History', '/sale/order/history')
    .set('FAQs', '/faqs');

const aboutLinks = new Map()
    .set('Navigation', null)
    .set('Trunc', '/default')
    .set('Powder Room', '/powder_room_ph')
    .set('Trunc Show', '/trunc_show_ph')
    .set('Trunc At Home', '/trunc_at_home_ph')
    .set('Brands', '/brands')
    .set('Women', '/women')
    .set('Men', '/men')
    .set('Kids & Toys', '/kids-toys')
    .set('Offers', '/offers');

export const DEFAULT_LINKS = new Map()
    .set('account', accountLinks)
    .set('about', aboutLinks);

