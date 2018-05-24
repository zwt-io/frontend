import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    {
      title: '2015',
      months: [
        { month: '一月', delta: '0.97', down: true, kWatts: '816', cost: '619' },
        { month: '二月', delta: '1.83', down: true, kWatts: '806', cost: '606' },
        { month: '三月', delta: '0.64', down: true, kWatts: '803', cost: '599' },
        { month: '四月', delta: '2.17', down: false, kWatts: '818', cost: '625' },
        { month: '五月', delta: '1.32', down: true, kWatts: '809', cost: '612' },
        { month: '六月', delta: '0.05', down: true, kWatts: '808', cost: '612' },
        { month: '七月', delta: '1.39', down: false, kWatts: '815', cost: '619' },
        { month: '八月', delta: '0.73', down: true, kWatts: '807', cost: '606' },
        { month: '九月', delta: '2.61', down: true, kWatts: '792', cost: '587' },
        { month: '十月', delta: '0.16', down: true, kWatts: '791', cost: '587' },
        { month: '十一月', delta: '1.71', down: true, kWatts: '786', cost: '568' },
        { month: '十二月', delta: '0.37', down: false, kWatts: '789', cost: '580' },
      ],
    },
    {
      title: '2016',
      active: true,
      months: [
        { month: '一月', delta: '1.56', down: true, kWatts: '789', cost: '580' },
        { month: '二月', delta: '0.33', down: false, kWatts: '791', cost: '587' },
        { month: '三月', delta: '0.62', down: true, kWatts: '790', cost: '587' },
        { month: '四月', delta: '1.93', down: true, kWatts: '783', cost: '555' },
        { month: '五月', delta: '2.52', down: true, kWatts: '771', cost: '529' },
        { month: '六月', delta: '0.39', down: false, kWatts: '774', cost: '542' },
        { month: '七月', delta: '1.61', down: true, kWatts: '767', cost: '517' },
        { month: '八月', delta: '1.41', down: true, kWatts: '759', cost: '485' },
        { month: '九月', delta: '1.03', down: true, kWatts: '752', cost: '472' },
        { month: '十月', delta: '2.94', down: false, kWatts: '769', cost: '523' },
        { month: '十一月', delta: '0.26', down: true, kWatts: '767', cost: '517' },
        { month: '十二月', delta: '1.62', down: true, kWatts: '760', cost: '485' },
      ],
    },
    {
      title: '2017',
      months: [
        { month: '一月', delta: '1.34', down: false, kWatts: '789', cost: '580' },
        { month: '二月', delta: '0.95', down: false, kWatts: '793', cost: '593' },
        { month: '三月', delta: '0.25', down: true, kWatts: '791', cost: '587' },
        { month: '四月', delta: '1.72', down: false, kWatts: '797', cost: '606' },
        { month: '五月', delta: '2.62', down: true, kWatts: '786', cost: '574' },
        { month: '六月', delta: '0.72', down: false, kWatts: '789', cost: '580' },
        { month: '七月', delta: '0.78', down: true, kWatts: '784', cost: '568' },
        { month: '八月', delta: '0.36', down: true, kWatts: '782', cost: '561' },
        { month: '九月', delta: '0.55', down: false, kWatts: '787', cost: '574' },
        { month: '十月', delta: '1.81', down: true, kWatts: '779', cost: '548' },
        { month: '十一月', delta: '1.12', down: true, kWatts: '774', cost: '536' },
        { month: '十二月', delta: '0.52', down: false, kWatts: '776', cost: '606' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
