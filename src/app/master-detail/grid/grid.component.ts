import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { Inventory } from './inventory/inventory';
import { Sku } from './inventory/sku';

import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  editRow: any;
  hoveredRow: any;
  edittedItem: any;
  selectedItem: any;
  singleSelected: any;
  items: any[];
  solutionElements: any[];
  relatedProducts: any[];
  portfolioTypes: any[];
  skus: any[];
  testms;

  selectedAccount = ['Adam'];

  model = {
    se: ''
  }

  constructor() { }

  ngOnInit() {

        // <clr-dg-column>SKU Name</clr-dg-column>
        // <clr-dg-column>SKU Type</clr-dg-column>
        // <clr-dg-column>Portfolio Tag</clr-dg-column>
        // <clr-dg-column>Product</clr-dg-column>
        // <clr-dg-column>Solution Element</clr-dg-column>

    this.skus = [
      { name: 'TAM-TIER-1', connected: 'Connected' }, 
      { name: 'TAM-TIER-2', connected: 'Connected' },
      { name: 'TAM-TIER-3', connected: 'Connected' },
      { name: 'CON-VS-HC-25HOSTS-C', connected: 'All Others' },
      { name: 'EDU-VS-HC-25HOSTS-C', connected: 'All Others' }
    ];

    this.testms = [
      { name: 'Integrate vRA with Microsoft DNS', connected: 'Connected' }, 
      { name: 'Integrate vRA with F5 for LBaaS', connected: 'Connected' },
      { name: 'Integrate vRA with ServiceNow Ticketing', connected: 'Connected' },
      { name: 'Integrate vRA with ServiceNow Ticketing', connected: 'All Others' },
      { name: 'Integrate vRA with ServiceNow Ticketing', connected: 'All Others' },
      { name: 'Integrate vRA with ServiceNow Ticketing', connected: 'All Others' }
    ];

    this.solutionElements = [
      { name: 'Design a virtual infrastructure foundation' },
      { name: 'Enable automated ticket creation in external ITSM' },
      { name: 'Leverage an external configuration management system' },
      { name: 'Leverage network virtualization in blueprints' },
      { name: 'Leverage operations management with network virtualization' },
      { name: 'Leverage cloud automation to add database instances' },
      { name: 'Deploy lifecycle management for cloud automation platform' },
      { name: 'Enhance existing problem management processes' },
      { name: 'Develop and implement a service level management template' },
      { name: 'Develop and implement a service level management process ' }
    ];
    this.items = [
      {
        skuName: 'Business Role 1',
        skuType: 'TAM-TIER-1',
        portfolioTag: 'Education',
        product: 'vSphere 6.5',
        ms: [],
        se: [
          { name: 'Design a virtual infrastructure foundation' }
        ]
      },
      {
        skuName: 'Business Role 2',
        skuType: 'TAM-TIER-1',
        portfolioTag: 'SDDC - Migration',
        product: 'vSphere 6',
        ms: [
          { name: 'Integrate vRA with F5 for LBaaS', connected: 'Connected' }
        ],
        se: [
          { name: 'Leverage network virtualization in blueprints' }
        ]
      },
      {
        skuName: 'Business Role 3',
        skuType: 'TAM-TIER-1',
        portfolioTag: 'Managed Services',
        product: 'vSphere 6.5',
        ms: [],
        se: [
          { name: 'Design a virtual infrastructure foundation' }, 
          { name: 'Leverage network virtualization in blueprints' }
        ]
      },
      {
        skuName: 'Business Role 4',
        skuType: 'TAM-TIER-1',
        portfolioTag: 'Advisory Services',
        product: 'vSphere 6',
        ms: [
          { name: 'Integrate vRA with Microsoft DNS', connected: 'Connected' }, 
          { name: 'Integrate vRA with F5 for LBaaS', connected: 'Connected' },
          { name: 'Integrate vRA with ServiceNow Ticketing', connected: 'Connected' }
        ],
        se: [
          { name: 'Enable automated ticket creation in external ITSM' }
        ]
      },

    ];
    this.relatedProducts = [
      { id: "rp1", name: "vSphere 6" },
      { id: "rp1", name: "vSphere 6.5" }
    ];
    this.portfolioTypes = [
      { id: "pt1", name: "Advisory Services Investment" },
      { id: "pt2", name: "Advisory Services" },
      { id: "pt3", name: "BCA - Business Critical Applications" },
      { id: "pt4", name: "Education" },
      { id: "pt5", name: "PMO Delivery Excellence - Project Management" },
      { id: "pt6", name: "EUC - Application Strategy and Packaging" },
      { id: "pt7", name: "EUC - Desktop as a Service (DaaS)" },
      { id: "pt8", name: "EUC - Desktop Migration / Image Management" },
      { id: "pt9", name: "EUC - Desktop Virtualization" },
      { id: "pt10", name: "EUC - End User Computing Solutions" },
      { id: "pt11", name: "EUC - Enterprise Mobility Management" },
      { id: "pt12", name: "Managed Services" },
      { id: "pt13", name: "OTS - Cloud Automation" },
      { id: "pt14", name: "OTS - Business Management" },
      { id: "pt15", name: "OTS - Hybrid Cloud Operations" },
      { id: "pt16", name: "OTS - Operations Management" },
      { id: "pt17", name: "OTS - SDDC/Cloud" },
      { id: "pt18", name: "OTS - EUC" },
      { id: "pt19", name: "SDDC - Business Continuity and Disaster Recovery (BCDR)" },
      { id: "pt20", name: "SDDC - Cloud Automation" },
      { id: "pt21", name: "SDDC - DevOps" },
      { id: "pt22", name: "SDDC - OpenStack" },
      { id: "pt23", name: "SDDC - EVO" },
      { id: "pt24", name: "SDDC - Business Management" },
      { id: "pt25", name: "SDDC - Migration" },
      { id: "pt26", name: "SDDC - Operations Management" },
      { id: "pt27", name: "SDDC - Virtualization - Infrastructure" },
      { id: "pt28", name: "SDDC - Virtualization - Networking" },
      { id: "pt29", name: "SDDC - Virtualization - Storage" },
      { id: "pt30", name: "SDDC - Integration and Automation - Delivery" },
      { id: "pt31", name: "SDDC - Integration and Automation - Support" },
      { id: "pt32", name: "SDDC - Virtualization – NFV " },
      { id: "pt33", name: "Hybrid Cloud" }
    ];
  }

  selectionChanged( event: Event ) {
    console.log('selectionChanged');
    if ( this.edittedItem && this.edittedItem !== this.selectedItem) {
      // go save the editted item
      console.log('go save.. ' + this.edittedItem.name);
    }
    this.edittedItem = this.selectedItem;
  }

  addBusinessRoles() {
    console.log('I am about to ad business role');
  }

}