import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // A light background for the home screen
  },
  searchGroup: {
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchControl: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: '#34967C',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  filterContainer: {
    width: 70, // Adjust size as needed
    height: 50,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50, // Give some space for the bottom tab bar
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});