
import { Sorted , Unsorted , Alpha , Beta } from 'Colors'

const { floor } = Math;


export default function * ( size , items ){
    
    for ( let i = 0 ; i < size ; i++ )
        yield * heap_up(items,i);
    
    for ( let i = 0 ; i < size - 1 ; i++){
        
        let last = size - 1 - i;
        
        [ items[0] , items[last] ] = [ items[last] , items[0] ];
        
        yield [ Sorted , 0 ]
        yield [ Sorted , last ]
        
        yield * heap_down(items,last);
    }
}


function * heap_up ( items , i ){
    
    let root = floor((i - 1) / 2);
    
    while ( i > 0 && items[root] < items[i]){
        
        [ items[i] , items[root] ] = [ items[root] , items[i] ];
        
        yield [ Alpha , i ]
        yield [ Beta , root ]
        yield [ Unsorted , i ]
        yield [ Unsorted , root ]

        i = root;
        
        root = floor((i - 1) / 2);
    }

    yield [ Unsorted , i ]
}

function * heap_down ( items , size ){
    
    let i = 0;
    
    while ( 2 * i + 1 < size ){
        
        let child = 2 * i + 1;
        
        if(2 * i + 2 < size && items[2 * i + 2] >= items[child])
            child = 2 * i + 2;
        
        yield [ Alpha , i ]
        yield [ Beta , child ]
        yield [ Unsorted , i ]
        yield [ Unsorted , child ]
        
        if(items[i] >= items[child])
            return
        
        [ items[i] , items[child] ] = [ items[child] , items[i] ];
        
        i = child;
    }
}
