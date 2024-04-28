export const filterData = (data, selectedFilters) => {
    let propertyType, priceRange, bedrooms, bathrooms = false;

    const filteredData = data.filter(item => {

        if (item.description.type) {
            if (selectedFilters.propertyType.size === 0) {
                propertyType = true;
            } else {
                propertyType = filterByPropertyType(selectedFilters.propertyType, item);
            }
        }

        if (item.list_price) {
            if (selectedFilters.priceRange.size === 0) {
                priceRange = true;
            } else {
                priceRange = filterByPriceRange(selectedFilters.priceRange, item);
            }
        }

        if (item.description.beds) {
            if (selectedFilters.numberBedrooms.size === 0) {
                bedrooms = true;
            } else {
                bedrooms = filterByNumberBedrooms(selectedFilters.numberBedrooms, item);
            }
        }

        if (item.description.baths) {
            if (selectedFilters.numberBathrooms.size === 0) {
                bathrooms = true;
            } else {
                bathrooms = filterByNumberBathrooms(selectedFilters.numberBathrooms, item);
            }
        }

        return propertyType && priceRange && bedrooms && bathrooms;
    })

    return filteredData;
}

export const filterByPropertyType = (propertyFilters, item) => {
    let propertyType = false;

    for (const filter of propertyFilters) {
        switch (filter) {
            case 'Single Family Home':
                propertyType = item.description.type.includes('single_family');
                break;
            case 'Condo/Townhouse':
                propertyType = ('condos/townhouse').split('/').some(part => item.description.type.includes(part));
                break;
            case 'Apartment':
                propertyType = item.description.type.includes('apartment');
                break;
            case 'Commercial':
                propertyType = item.description.type.includes('commercial');
                break;
            case 'Land':
                propertyType = item.description.type.includes('land');
                break;
            case 'Multy-Family':
                propertyType = item.description.type.includes('multy_family');
                break;
            default:
                break;
        }

        if (propertyType) {
            break;
        }
    }

    return propertyType;
}

export const filterByPriceRange = (priceRangeFilters, item) => {
    let priceRange = false;
    for (const filter of priceRangeFilters) {
        switch (filter) {
            case 'Under $200K':
                priceRange = item.list_price < 200000;
                break;
            case '$200K - $500K':
                priceRange = (item.list_price >= 200000) && (item.list_price <= 500000);
                break;
            case '$500K - $1M':
                priceRange = (item.list_price >= 500000) && (item.list_price <= 1000000);
                break;
            case '> $1M':
                priceRange = item.list_price > 1000000;
                break;
            default:
                break;
        }

        if (priceRange) {
            break;
        }
    }
    return priceRange;
}

export const filterByNumberBedrooms = (numberBedroomsFilters, item) => {
    let bedrooms = false;

    for (const filter of numberBedroomsFilters) {
        switch (filter) {
            case '1 Bedroom':
                bedrooms = (item.description.beds === 1);
                break;
            case '2 Bedrooms':
                bedrooms = (item.description.beds === 2);
                break;
            case '3 Bedrooms':
                bedrooms = (item.description.beds === 3);
                break;
            case '4 Bedrooms':
                bedrooms = (item.description.beds === 4);
                break;
            case '5+ Bedrooms':
                bedrooms = (item.description.beds >= 5);
                break;
            default:
                break;
        }

        if (bedrooms) {
            break;
        }
    }

    return bedrooms;
}

export const filterByNumberBathrooms = (numberBathroomsFilters, item) => {
    let bathrooms = false;

    for (const filter of numberBathroomsFilters) {
        switch (filter) {
            case '1 Bathroom':
                bathrooms = (item.description.baths === 1);
                break;
            case '2 Bathrooms':
                bathrooms = (item.description.baths === 2);
                break;
            case '3 Bathrooms':
                bathrooms = (item.description.baths === 3);
                break;
            case '4 Bedrooms':
                bathrooms = (item.description.baths === 4);
                break;
            case '5+ Bathrooms':
                bathrooms = (item.description.baths >= 5);
                break;
            default:
                break;
        }

        if (bathrooms) {
            break;
        }
    }

    return bathrooms;
}