export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'minCom',
        title: 'Compra Minima',
        type: 'string',
      },
      { 
        name: 'precioMin',
        title: 'Precio por minimo',
        type: 'number',
      },
      { 
        name: 'precioMax',
        title: 'Precio por encima del minimo',
        type: 'number',
      },
      { 
        name: 'pais',
        title: 'País',
        type: 'string',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'link',
        title: 'Link',
        type: 'string',
      },
      { 
        name: 'formaPago',
        title: 'Forma de pago',
        type: 'string',
      },
      { 
        name: 'transporte',
        title: 'Transporte',
        type: 'string',
      },
      { 
        name: 'empresasEnvio',
        title: 'Empresas de envio',
        type: 'string',
      }
    ]
  }