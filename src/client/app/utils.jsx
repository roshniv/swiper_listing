class Utils {

	getTitle(str) {
		switch(str) {
			case 'Year':
				return 'Released Year';
				break;
			case 'Rated':
				return 'Motion Picture Rating';
				break;
			case 'Released': 
				return 'Releasing Date';
				break;
			case 'Runtime':
            case 'Genre':
            case 'Director':
            case 'Writer':
            case 'Actors':
            case 'Plot':
            case 'Language':
            case 'Country':
            case 'Awards':
            case 'Rating':
            case 'Votes':
            	return str;
            	break;
            case 'DVD': 
            	return 'DVD Releasing Date';
            	break;
            case 'BoxOffice':
            	return 'BoxOffice Collection';
            	break;
            case 'Production':
            	return 'Production House';
            	break;
            default:
            	return str;
		}
	}
};

export default new Utils();