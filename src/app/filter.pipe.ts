import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
//   transform(value: any, args?: any): any {
//     if (!value) return null;
//     if (!args) return null;
//     args = args.toLowerCase();
//     return value.filter(function (item:any) {
//       return JSON.stringify(item).toLowerCase().includes(args);
//     });
//   }
//   transform(items: any[], searchText: string): any[] {
//     if (!items) return [];
//     if (!searchText) return items;
//     searchText = searchText.toLowerCase();
//     return items.filter(item => {
//         return item.cost_center_code.toLowerCase().includes(searchText);
//     });
// }
}
