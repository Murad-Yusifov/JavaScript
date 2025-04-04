// fetch

function getItems() {
    fetch(`https://northwind.vercel.app/api/categories`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        
    })
}

// post

const postItem = () => {
    fetch(`https://northwind.vercel.app/api/categories`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name:"Murad",
            description: "Developer",

        }),
    });
};

//  delete
function delItem(id) {
    fetch(`https://northwind.vercel.app/api/categories/${id}`, {
        method: "DELETE",
    });
}





function getItemsAxios ()
 {
    axios.get(`https://northwind.vercel.app/api/categories`)
    .then(res => {
        console.log(res.data);
    })
 }


//  post

function postItemsAxios () {
    axios.post(`https://northwind.vercel.app/api/categories`, {
        name: "Murad",
        surname: "Yusifov",
        description: "Developer",
        date: "04/04/2025",
        fin: "1234567"
    })
}

//  delete

function deletItemAxios (text) {
    axios.delete(`https://northwind.vercel.app/api/categories/${text}`)
}
