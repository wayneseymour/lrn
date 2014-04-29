var item = {};

item['addOns'] = ['PARK_HOPPER', 'OTHER_TICKET'];


item['addOns'] = item.addOns.map(function(addOn) {
  addOn = addOn.split('_').map(function(tkn) {
    tkn = tkn.toLowerCase();
    tkn = tkn.charAt(0).toUpperCase() + tkn.slice(1);

    return tkn;
  });
  return addOn.join(' ');
});

console.log('modded addOns: ', item['addOns']);
