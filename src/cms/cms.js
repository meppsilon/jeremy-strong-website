import CMS from 'netlify-cms'

import MusicPagePreview from './preview-templates/MusicPagePreview'
import ChoreographyPagePreview from './preview-templates/ChoreographyPagePreview'
import FitnessPagePreview from './preview-templates/FitnessPagePreview'
import TravelPagePreview from './preview-templates/TravelPagePreview'
import PostPagePreview from './preview-templates/PostPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('music', MusicPagePreview)
CMS.registerPreviewTemplate('choreography', ChoreographyPagePreview)
CMS.registerPreviewTemplate('fitness', FitnessPagePreview)
CMS.registerPreviewTemplate('travel', TravelPagePreview)
// CMS.registerPreviewTemplate('posts', PostPagePreview)
