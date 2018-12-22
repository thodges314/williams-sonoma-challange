import jsonData from 'resources/index.json'

export function loadProductData () {
  // const targetUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
  // const targetUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
  // let productData
  // fetch(targetUrl)
  //     .then(res => res.json())
  //     // .then(json => this.setState({ data: json }))
  //     .then(json => productData = json)
  console.log(jsonData)
  // let productData = JSON.parse(jsonData)
  return (jsonData)
}
