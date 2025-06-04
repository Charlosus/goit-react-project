// to render collection of elemnts we need to use map method 

// [1, 2, 3].map(item => {
//     return <p>{item}</p>;
// })

// from that we get array of react elements 

//  <div>
    // {[1, 2, 3].map(item => {
        // return <div key={item}>{item}</div>
    // })}
// </div> 

// lets use array of books 



 const BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => {
                return <li key={book.id}>{book.name}</li>
            })}
        </ul>
    )
}

export default BookList;