=> Here is the planning to display items using query(react-toolkit), and apply CRUD operation on products.
==>Initially we have deleted the item by using axios, and here need to reload the page to see the item whether deleted or not (to reflect).

==>we have query feature to overcome the above problem...
we use to call the use hook returned function(fn) inside a event handler function
and need to call the useLazy hook retunred function(rfn) inside the event handler function to reload the server after delete the item. useLazy hook will send a request to server to reload the page after deletion.