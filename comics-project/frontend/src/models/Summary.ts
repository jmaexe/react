export interface Summary {
    resourceURI? : string;
    name? : string;
    
}

export interface StorySummary extends Summary {
    type?: 'interiorStory' | 'cover' | '';

}
