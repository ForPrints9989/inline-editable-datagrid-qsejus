import { Sku } from './sku';

export class Inventory {
  
  private _all: Sku[];
  
  get all(): Sku[] {
    return this._all.slice();
  }

  reset() {
    this._all = [];
    
    this._all.push({
      // id: 'TAM-TIER-1',
      // name: 'TAM-TIER-1',
      // description: 'Tier 1 – Technical Account Manager',
      // quantity: 2,
      // price: 45700,
      // credits: 460,
      // pdf: 'http://vmware/PSO/SKU/datasheet'
    });
    // this._all.push({
    //   id: 'CON-VS-HC-25HOSTS-C',
    //   name: 'CON-VS-HC-25HOSTS-C',
    //   description: 'VMware Virtualization Health Check (25 Hosts)',
    //   quantity: 1,
    //   price: 12400,
    //   credits: 140,
    //   pdf: 'http://vmware/PSO/SKU/datasheet'
    // });

  }



  
}