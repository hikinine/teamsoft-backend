import { Client } from "@googlemaps/google-maps-services-js";
import "dotenv/config"

interface GeographLocation {
  latitude: number | null;
  longitude: number | null;
}

const client = new Client({});

export async function getGeographLocation(zipCode: string): Promise<GeographLocation> {

  let geographLocation = {latitude: null, longitude: null} as GeographLocation

  try {
    const { data } = await client.textSearch({
      params: {
        region: "BRAZIL",
        key: process.env.GOOGLE_GEOCODE_API_KEY || "",
        query: zipCode,
      },
    });

    if ( data.results?.[0].geometry?.location) {
      geographLocation = {
        latitude: data.results?.[0].geometry?.location.lat,
        longitude: data.results?.[0].geometry?.location.lng
      }
    }

  } 
  catch (error) { }

  return geographLocation
}
