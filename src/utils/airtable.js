import Airtable from 'airtable';

export const airtable = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base("appNF9hNyOvfP5lvG");
