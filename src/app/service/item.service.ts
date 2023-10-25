import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/item'; // Assurez-vous d'importer le modèle Item correspondant

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8055'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les articles
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/`);
  }

  // Méthode pour ajouter un nouvel article
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/`, item);
  }

  // Méthode pour mettre à jour un article
  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
  }

  // Méthode pour supprimer un article
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour obtenir un article par ID
  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }
}