import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(empname, SearchText) {
    if(SearchText=== undefined){
      return empname;
    }
    else{
      return empname.filter(
        function(x){
          return x.name.toLowerCase().startsWith(SearchText.toLowerCase());
        }
      )
    }
    
  }

}
