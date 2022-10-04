LISTS

1. FlatList
   data = {arrays}
   keyExtractor = (data)=> data.id.toString()
   renderItem = ({item, index, separators})=> <ListItem title={item.title} description={item.description} image={item.image}/>