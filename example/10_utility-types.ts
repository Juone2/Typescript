interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// function fetchProducts() {
//
// }

type OmitShoppingItem = Omit<Product, 'id' | 'stock'>
type shoppingItem = Pick<Product, 'brand' | 'name' | 'price'>

function displayProductDetail(item: shoppingItem) {
  
} 

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string; 
}

type AddressType = Omit<AddressBook, 'address'>

const phoneBook: AddressType = {
  name: '재택근무',
  phone: 1234,
  company: 'school'
}

const notCompany: Omit<AddressBook, 'name' | 'company'> = {
  phone: 1234,
  address: 'hi'
}

type UpdateProduct = Partial<Product>
function updateProductItem(productItem: UpdateProduct) {

}

interface UserPfoFileDetail {
  name?: string;
  age?: number;
}

type RequiredUserPfoFileDetail = Required<UserPfoFileDetail>

const Profile: RequiredUserPfoFileDetail = {
  name: 'juwon',
  age: 18
}

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User;