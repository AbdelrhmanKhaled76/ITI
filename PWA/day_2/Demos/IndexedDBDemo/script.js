var db = idb.open('Couches',4,upgradeDB=>{
    // upgradeDB.createObjectStore('Orders',{keyPath:'id'})
    // upgradeDB.createObjectStore('Products',{keyPath:'id'})
    var store = upgradeDB.transaction.objectStore('Products')
    store.createIndex('name','name',{unique:true})
})

function AddOrders(){
    var items = [
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 7
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 3
        },
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        }
      ];
      db.then(mydb=>{
        var tx = mydb.transaction('Orders','readwrite')
        var store = tx.objectStore('Orders')

        Promise.all(items.map(item=>{
            return store.add(item)
        }))
        .then(()=>{
            console.log('items added successfully')
        })
        .catch(err=>{
            tx.abort()
            console.log(err)
        })

      }).catch(err=>console.log(err))
}

document.getElementById('prdId').onclick = function(){
    var items = [
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 7
        },
        {
          name: 'Stool',
          id: 'st-re-pin',
          price: 59.99,
          color: 'red',
          material: 'pine',
          description: 'A light, high-stool',
          quantity: 3
        },
        {
          name: 'Chair',
          id: 'ch-blu-pin',
          price: 49.99,
          color: 'blue',
          material: 'pine',
          description: 'A plain chair for the kitchen table',
          quantity: 1
        },
        {
          name: 'Dresser',
          id: 'dr-wht-ply',
          price: 399.99,
          color: 'white',
          material: 'plywood',
          description: 'A plain dresser with five drawers',
          quantity: 4
        },
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 11
        }
      ];

      db.then(mydb=>{
        var tx = mydb.transaction('Products','readwrite')
        var store = tx.objectStore('Products')
        Promise.all(items.map(item=>{
            return store.add(item)
        })).then(()=>{
            console.log('data inserted successfully')
        }).catch(err=>{
            tx.abort()
            console.log(err)
        })
      })
      .catch(err=>{
        console.log(err)
      })
}


document.getElementById('searchId').onclick=function(){
    var prdName = document.getElementById('txt1').value
    db.then(mydb=>{
    var tx = mydb.transaction('Products','readonly')
    var store = tx.objectStore('Products')
            // store.get()//id
    var index = store.index('name')
        return index.get(prdName)
    }).then(product=>{
        console.log(product)
        if(!product){
            document.getElementById('dv1').innerHTML = "not found"
        }else{
            document.getElementById('dv1').innerHTML=""
        for(var elem in product){
            document.getElementById('dv1').innerHTML += elem+"::"+product[elem]+"<br>"
        }}
    })
    

}


/**
 * get Orders
 * Process Orders
 * checkQuanttity
 * Update Products
 */

function fulfillOrders(){
    getOrders()
    .then(orders=>{
        return ProcessOrders(orders)
    }).then(productList=>{
        // console.log(productList)
        return updateProducts(productList)
    }).then(()=>{
        console.log('success')
    })
}

function getOrders(){
   return db.then(mydb=>{
        tx = mydb.transaction('Orders','readonly')
        store = tx.objectStore('Orders')
        return store.getAll()
    })
}

function ProcessOrders(Orders){
   return db.then(mydb=>{
        tx=mydb.transaction('Products','readonly')
        store = tx.objectStore('Products')

        return Promise.all(Orders.map(order=>{
            return store.get(order.id).then(product=>{
                return checkQuantity(product,order)
            })
        }))
    })
}

function checkQuantity(product,order){
return new Promise((resolve,reject)=>{
    var qitem = product.quantity-order.quantity
    var item = product
    if(qitem>=0){
        //done
        item.quantity = qitem
        resolve(item)
    }else{
        //error
        reject('out of stock')
    }
})
    
}

function updateProducts(prdList){
   return db.then(mydb=>{
        tx= mydb.transaction('Products','readwrite')
        store = tx.objectStore('Products')

        return Promise.all(prdList.map(product=>{
            return store.put(product)
        }))
    })
}