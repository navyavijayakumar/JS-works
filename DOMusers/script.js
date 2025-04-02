// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUsers(data))

async function getAllUsers(){
  let response=await fetch("https://jsonplaceholder.typicode.com/users")
  let data=await response.json()
  displayUsers(data)
}
getAllUsers()

function displayUsers(users){
    let htmlData=''
    for(let u of users){
        htmlData+=`<div class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div class="p-6">
                    <div class="flex flex-col items-center">
                        <img src="/api/placeholder/150/150" alt="User" class="w-24 h-24 rounded-full mb-4">
                        <h2 class="text-xl font-semibold text-gray-800">${u.name}</h2>
                        <p class="text-gray-600 mb-2">${u.company.name}</p>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                        <div class="flex items-center justify-between text-sm text-gray-600">
                            <span><i class="fas fa-envelope mr-2"></i>${u.email}</span>
                        </div>
                        <div class="flex items-center justify-between mt-2 text-sm text-gray-600">
                            <span><i class="fas fa-phone mr-2"></i>${u.phone}</span>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-center space-x-2">
                        <button class="text-blue-500 hover:text-blue-700">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="text-red-500 hover:text-red-700">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>`
    }
    document.querySelector("#root").innerHTML=htmlData
}


