import React,{useState,useEffect} from 'react';
import { ActivityIndicator, Button, FlatList, Text } from 'react-native';
import Card from '../component/Card';
import FixScreen from '../component/FixScreen';
import listingsApi from '../api/listings';
import useApi from '../Hooks/useApi';



function ListingScreen(props) {

  const getListingsApi = useApi(listingsApi.getListings);
 
    useEffect(() => {
         getListingsApi.request(1,2,3);
       
    }, [])
    
    
    return (
        <FixScreen>
            {getListingsApi.error && (
            <>
                <Text>server problm</Text>
                <Button title="retry" onPress={loadListings}/>
             </>
             ) }
             <ActivityIndicator animating={getListingsApi.loading} size="large" color="black"/>
            <FlatList
            data={getListingsApi.data}
            keyExtractor={listing =>listing.id.toString() }
            renderItem={({item})=>
                <Card 
                title={item.title}
                sub={"£"+item.price}
                image={item.images[0].url}
                />
                
                
                }
            
            />
                
            
        </FixScreen>
    );
}

export default ListingScreen;