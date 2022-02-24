import { Client } from "@googlemaps/google-maps-services-js";
import "dotenv/config";
export interface GeographLocation {
  latitude: number | null;
  longitude: number | null;
}

const client = new Client({});

const geolocationDefaultParams = {
  region: "BRAZIL",
  key: process.env.GOOGLE_GEOCODE_API_KEY,
};

export async function getGeographLocation(zipCode: string) {
  try {
    const { data } = await client.textSearch({
      params: {
        ...geolocationDefaultParams,
        query: zipCode,
      },
    });

    if (!data.results?.[0].geometry?.location) {
      throw new Error(
        `WARNING, PROBABLY NOT A VALID ZIPCODE. MAY I VALIDATE IT?`
      );
    }
    return {
      latitude: data.results?.[0].geometry?.location.lat,
      longitude: data.results?.[0].geometry?.location.lng,
    };
  } catch (error) {
    console.log(error.message);
  }

  return {
    latitude: null,
    longitude: null,
  };
}
