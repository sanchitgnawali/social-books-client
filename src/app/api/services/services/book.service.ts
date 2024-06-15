/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BookResponse } from '../models/book-response';
import { borrowBook } from '../fn/book/borrow-book';
import { BorrowBook$Params } from '../fn/book/borrow-book';
import { findAllBooks } from '../fn/book/find-all-books';
import { FindAllBooks$Params } from '../fn/book/find-all-books';
import { findAllBooksByOwner } from '../fn/book/find-all-books-by-owner';
import { FindAllBooksByOwner$Params } from '../fn/book/find-all-books-by-owner';
import { findAllBorrowedBooks } from '../fn/book/find-all-borrowed-books';
import { FindAllBorrowedBooks$Params } from '../fn/book/find-all-borrowed-books';
import { findAllReturnedBooks } from '../fn/book/find-all-returned-books';
import { FindAllReturnedBooks$Params } from '../fn/book/find-all-returned-books';
import { findBookById } from '../fn/book/find-book-by-id';
import { FindBookById$Params } from '../fn/book/find-book-by-id';
import { findBookById1 } from '../fn/book/find-book-by-id-1';
import { FindBookById1$Params } from '../fn/book/find-book-by-id-1';
import { findBookById2 } from '../fn/book/find-book-by-id-2';
import { FindBookById2$Params } from '../fn/book/find-book-by-id-2';
import { findBookById3 } from '../fn/book/find-book-by-id-3';
import { FindBookById3$Params } from '../fn/book/find-book-by-id-3';
import { findBookById4 } from '../fn/book/find-book-by-id-4';
import { FindBookById4$Params } from '../fn/book/find-book-by-id-4';
import { findBookById5 } from '../fn/book/find-book-by-id-5';
import { FindBookById5$Params } from '../fn/book/find-book-by-id-5';
import { findBookById6 } from '../fn/book/find-book-by-id-6';
import { FindBookById6$Params } from '../fn/book/find-book-by-id-6';
import { PageResponseBookResponse } from '../models/page-response-book-response';
import { PageResponseBorrowedBookResponse } from '../models/page-response-borrowed-book-response';
import { returnApproveBorrowedBook } from '../fn/book/return-approve-borrowed-book';
import { ReturnApproveBorrowedBook$Params } from '../fn/book/return-approve-borrowed-book';
import { returnBorrowedBook } from '../fn/book/return-borrowed-book';
import { ReturnBorrowedBook$Params } from '../fn/book/return-borrowed-book';
import { saveBook } from '../fn/book/save-book';
import { SaveBook$Params } from '../fn/book/save-book';
import { updateArchive } from '../fn/book/update-archive';
import { UpdateArchive$Params } from '../fn/book/update-archive';
import { updateSharableBook } from '../fn/book/update-sharable-book';
import { UpdateSharableBook$Params } from '../fn/book/update-sharable-book';
import { uploadBookCover } from '../fn/book/upload-book-cover';
import { UploadBookCover$Params } from '../fn/book/upload-book-cover';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllBooks()` */
  static readonly FindAllBooksPath = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooks$Response(params?: FindAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAllBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooks(params?: FindAllBooks$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAllBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `saveBook()` */
  static readonly SaveBookPath = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBook$Response(params: SaveBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBook(params: SaveBook$Params, context?: HttpContext): Observable<number> {
    return this.saveBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadBookCover()` */
  static readonly UploadBookCoverPath = '/books/cover/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadBookCover()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadBookCover$Response(params: UploadBookCover$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadBookCover(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadBookCover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadBookCover(params: UploadBookCover$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadBookCover$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateSharableBook()` */
  static readonly UpdateSharableBookPath = '/books/sharable/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSharableBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateSharableBook$Response(params: UpdateSharableBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateSharableBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSharableBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateSharableBook(params: UpdateSharableBook$Params, context?: HttpContext): Observable<number> {
    return this.updateSharableBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `borrowBook()` */
  static readonly BorrowBookPath = '/books/borrow/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook$Response(params: BorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return borrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowBook(params: BorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.borrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnBorrowedBook()` */
  static readonly ReturnBorrowedBookPath = '/books/borrow/return/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnBorrowedBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowedBook$Response(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnBorrowedBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnBorrowedBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowedBook(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<number> {
    return this.returnBorrowedBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnApproveBorrowedBook()` */
  static readonly ReturnApproveBorrowedBookPath = '/books/borrow/return/approve/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnApproveBorrowedBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnApproveBorrowedBook$Response(params: ReturnApproveBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnApproveBorrowedBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnApproveBorrowedBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnApproveBorrowedBook(params: ReturnApproveBorrowedBook$Params, context?: HttpContext): Observable<number> {
    return this.returnApproveBorrowedBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateArchive()` */
  static readonly UpdateArchivePath = '/books/archived/{book-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchive()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchive$Response(params: UpdateArchive$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchive(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchive(params: UpdateArchive$Params, context?: HttpContext): Observable<number> {
    return this.updateArchive$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllReturnedBooks()` */
  static readonly FindAllReturnedBooksPath = '/books/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllReturnedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBooks$Response(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllReturnedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllReturnedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedBooks(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllReturnedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllBooksByOwner()` */
  static readonly FindAllBooksByOwnerPath = '/books/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBooksByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooksByOwner$Response(params?: FindAllBooksByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAllBooksByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBooksByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBooksByOwner(params?: FindAllBooksByOwner$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAllBooksByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllBorrowedBooks()` */
  static readonly FindAllBorrowedBooksPath = '/books/borrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBorrowedBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBooks$Response(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllBorrowedBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBorrowedBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedBooks(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllBorrowedBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById()` */
  static readonly FindBookByIdPath = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById$Response(params: FindBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById(params: FindBookById$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById3()` */
  static readonly FindBookById3Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById3$Response(params: FindBookById3$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById3(params: FindBookById3$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById2()` */
  static readonly FindBookById2Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById2$Response(params: FindBookById2$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById2(params: FindBookById2$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById5()` */
  static readonly FindBookById5Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById5$Response(params: FindBookById5$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById5(params: FindBookById5$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById5$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById6()` */
  static readonly FindBookById6Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById6$Response(params: FindBookById6$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById6(params: FindBookById6$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById6$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById1()` */
  static readonly FindBookById1Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById1$Response(params: FindBookById1$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById1(params: FindBookById1$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findBookById4()` */
  static readonly FindBookById4Path = '/books/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBookById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById4$Response(params: FindBookById4$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findBookById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBookById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBookById4(params: FindBookById4$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findBookById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

}
