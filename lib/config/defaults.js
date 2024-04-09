module.exports = function() {
  return {
    alwaysShowPerPageSelect: false,
    hidePerPageSelect: false,
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: "Clear"
      }
    },
    datepickerPerColumnOptions: {},
    initialPage: 1,
    perPage: 10,
    perPageValues: [10, 25, 50, 100],
    groupBy: false,
    collapseGroups: false,
    destroyEventBus: false,
    sendEmptyFilters: false,
    params: {},
    sortable: true,
    filterable: true,
    groupMeta: [],
    initFilters: {},
    sendInitialRequest: true,
    customFilters: [],
    templates: {},
    debounce: 250,
    dateFormat: "DD/MM/YYYY",
    dateFormatPerColumn: {},
    toMomentFormat: false,
    skin: false,
    columnsDisplay: {},
    columnsDropdown: false,
    texts: {
      count: "{count} risultati",
      first: "Primo",
      last: "Ultimo",
      filter: "Filtra risultati: ",
      filterPlaceholder: "Testo da ricercare",
      limit: "Risultati: ",
      page: "Pagina: ",
      noResults: "Non ci sono risultati da mostrare",
      noRequest:"Seleziona almeno un filtro",
      filterBy: "Filtra {column}",
      loading: 'Caricamento...',
      defaultOption: 'Seleziona {column}',
      columns: "Colonne"
    },
    sortIcon: {
      base: 'fa',
      up: 'fa-sort-up',
      down: 'fa-sort-down',
      is:'fa-sort' 
    },
    addSortedClassToCells:false,
    sortingAlgorithm(data, column) {
      return data.sort(this.getSortFn(column));
    },
    filterAlgorithm: {},
    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: false,
    highlightMatches: false,
    orderBy: false,
    descOrderColumns: [],
    footerHeadings: false,
    headings: {},
    headingsTooltips: {},
    pagination: {
      show:true,
      dropdown: false,
      chunk: 10,
      edge: false,
      align: "center",
      nav: "fixed"
    },
    childRow: false,
    childRowTogglerFirst: true,
    disabledChildRows: false,
    showChildRowToggler: true,
    uniqueKey: "id",
    requestFunction: false,
    requestAdapter: function(data) {
      return data;
    },
    responseAdapter: function(resp) {
      var data = this.getResponseData(resp);

      return {
        data: data.data,
        count: data.count
      };
    },
    requestKeys: {
      query: "query",
      limit: "limit",
      orderBy: "orderBy",
      ascending: "ascending",
      page: "page",
      byColumn: "byColumn"
    },
    rowClassCallback: false,
    preserveState: false,
    saveState: false,
    storage: "local",
    columnsClasses: {},
    summary: false,
    caption: false,
    cellClasses: {},
    visibleColumns: false,
    hiddenColumns: false,
    resizableColumns: true,
    editableColumns:[],
    tabbable: true,
    infiniteScroll: false,
    componentsOverride:{

    }
  };
};
