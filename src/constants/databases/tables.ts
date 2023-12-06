interface DisponibleTables {
 tables: Array<{
  tableNumber: number;
  disponible: boolean;
  customerName?: string;
 }>
}

export const DataTables: DisponibleTables = {
  tables: [
    {
      disponible: true,
      tableNumber: 1,
      customerName: ""
    },
    {
      disponible: false,
      tableNumber: 2,
      customerName: ""
    },
    {
      disponible: true,
      tableNumber: 3,
      customerName: ""
    }
  ]
}