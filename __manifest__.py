# -*- coding: utf-8 -*-
{
    'name': "VR on Website",

    'summary': """Show VR content in your website""",

    'description': """
    Embed your VR photos, videos, and scene in your web site.
    """,

    'author': "Cristian S. Rocha",
    'website': "https://github.com/odooxr",

    'category': 'Website/Website',
    'license': 'LGPL-3',
    'version': '0.1',

    'installable': True,
    'application': True,

    'depends': ['base', 'website', 'odooxr-base'],

    'data': [
        'views/views.xml',
        'views/xr_scripts.xml',
        'views/templates.xml',
        'views/snippets/s_vr_portal.xml',
        'views/snippets/snippets.xml',
    ],
    'demo': [],

}
