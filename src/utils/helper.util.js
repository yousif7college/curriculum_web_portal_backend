function getOffset(currentPage = 1, pageSize) {
  return (currentPage - 1) * [pageSize];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

export default {
  getOffset,
  emptyOrRows
}
