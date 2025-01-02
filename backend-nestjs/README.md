npm run migration:create src/database/migrations/User

npm run migrate

npm run migration:revert //quay lại



@IsDefined(value: any) Kiểm tra xem giá trị có được xác định hay không (!== undefined, !== null). Đây là trình trang trí duy nhất bỏ qua tùy chọn skipMissingProperties.


@IsOptional() Kiểm tra xem giá trị đã cho có trống không (=== null, === undefined) và nếu có, bỏ qua tất cả các trình xác thực trên thuộc tính.


@Equals(comparison: any) Kiểm tra xem giá trị có bằng phép so sánh ("===") hay không.


@NotEquals(comparison: any) Kiểm tra xem giá trị có bằng phép so sánh ("!==") hay không.


@IsEmpty() Kiểm tra xem giá trị đã cho có trống không (=== '', === null, === undefined).


@IsNotEmpty() Kiểm tra xem giá trị đã cho có rỗng không (!== '', !== null, !== undefined).


@IsIn(values: any[]) Kiểm tra xem giá trị có nằm trong mảng các giá trị được phép hay không.


@IsNotIn(values: any[]) Kiểm tra xem giá trị có nằm trong mảng các giá trị không được phép hay không.
Trình trang trí xác thực kiểu


@IsBoolean() Kiểm tra xem giá trị có phải là boolean không.


@IsDate() Kiểm tra xem giá trị có phải là ngày không.


@IsString() Kiểm tra xem giá trị có phải là chuỗi không.


@IsNumber(options: IsNumberOptions) Kiểm tra xem giá trị có phải là số không.


@IsInt() Kiểm tra xem giá trị có phải là số nguyên hay không.


@IsArray() Kiểm tra xem giá trị có phải là một mảng không


@IsEnum(entity: object) Kiểm tra xem giá trị có phải là enum hợp lệ không
Trình trang trí xác thực số


@IsDivisibleBy(num: number) Kiểm tra xem giá trị có phải là số chia hết cho số khác hay không.


@IsPositive() Kiểm tra xem giá trị có phải là số dương lớn hơn 0 không.


@IsNegative() Kiểm tra xem giá trị có phải là số âm nhỏ hơn 0 không.


@Min(min: number) Kiểm tra xem số đã cho có lớn hơn hoặc bằng số đã cho hay không.


@Max(max: number) Kiểm tra xem số đã cho có nhỏ hơn hoặc bằng số đã cho hay không.
Trình trang trí xác thực ngày


@MinDate(date: Date | (() => Date)) Kiểm tra xem giá trị có phải là ngày sau ngày đã chỉ định hay không.


@MaxDate(date: Date | (() => Date)) Kiểm tra xem giá trị có phải là ngày trước ngày đã chỉ định hay không.
Trình trang trí xác thực kiểu chuỗi


@IsBooleanString() Kiểm tra xem một chuỗi có phải là boolean hay không (ví dụ: "true" hay "false" hoặc "1", "0").


@IsDateString() Bí danh của 

@IsISO8601().


@IsNumberString(options?: IsNumericOptions) Kiểm tra xem một chuỗi có phải là số hay không.
Trình trang trí xác thực chuỗi


@Contains(seed: string) Kiểm tra xem chuỗi có chứa hạt giống hay không.


@NotContains(seed: string) Kiểm tra xem chuỗi có chứa hạt giống hay không.


@IsAlpha() Kiểm tra xem chuỗi có chỉ chứa các chữ cái (a-zA-Z) hay không.


@IsAlphanumeric() Kiểm tra xem chuỗi có chỉ chứa chữ cái và số hay không.


@IsDecimal(options?: IsDecimalOptions) Kiểm tra xem chuỗi có phải là giá trị thập phân hợp lệ hay không. IsDecimalOptions mặc định là force_decimal=False, decimal_digits: '1,',locale: 'en-US'


@IsAscii() Kiểm tra xem chuỗi có chỉ chứa ký tự ASCII hay không.


@IsBase32() Kiểm tra xem chuỗi có được mã hóa base32 hay không.


@IsBase58() Kiểm tra xem chuỗi có được mã hóa theo chuẩn base58 hay không.


@IsBase64(options?: IsBase64Options) Kiểm tra xem chuỗi có được mã hóa base64 hay không.


@IsIBAN() Kiểm tra xem một chuỗi có phải là IBAN (Số tài khoản ngân hàng quốc tế) hay không.


@IsBIC() Kiểm tra xem chuỗi có phải là mã BIC (Mã nhận dạng ngân hàng) hay mã SWIFT không.


@IsByteLength(min: number, max?: number) Kiểm tra xem độ dài của chuỗi (tính bằng byte) có nằm trong phạm vi nào không.


@IsCreditCard() Kiểm tra xem chuỗi ký tự có phải là thẻ tín dụng hay không.


@IsCurrency(options?: IsCurrencyOptions) Kiểm tra xem chuỗi có phải là số tiền hợp lệ hay không.


@IsISO4217CurrencyCode() Kiểm tra xem chuỗi có phải là mã tiền tệ ISO 4217 hay không.


@IsEthereumAddress() Kiểm tra xem chuỗi có phải là địa chỉ Ethereum hay không bằng regex cơ bản. Không xác thực tổng kiểm tra địa chỉ.


@IsBtcAddress() Kiểm tra xem chuỗi có phải là địa chỉ BTC hợp lệ hay không.


@IsDataURI() Kiểm tra xem chuỗi có phải là định dạng uri dữ liệu hay không.


@IsEmail(options?: IsEmailOptions) Kiểm tra xem chuỗi có phải là email không.


@IsFQDN(options?: IsFQDNOptions) Kiểm tra xem chuỗi có phải là tên miền đủ điều kiện hay không (ví dụ: domain.com).


@IsFullWidth() Kiểm tra xem chuỗi có chứa bất kỳ ký tự nào có độ rộng đầy đủ không.


@IsHalfWidth() Kiểm tra xem chuỗi có chứa bất kỳ ký tự nào có độ rộng bằng một nửa không.


@IsVariableWidth() Kiểm tra xem chuỗi có chứa hỗn hợp các ký tự toàn chiều rộng và một nửa chiều rộng hay không.


@IsHexColor() Kiểm tra xem chuỗi có phải là màu thập lục phân hay không.


@IsHSL() Kiểm tra xem chuỗi có phải là màu HSL dựa trên thông số kỹ thuật CSS Colors Level 4 hay không .


@IsRgbColor(options?: IsRgbOptions) Kiểm tra xem chuỗi có màu RGB hay RGBA.


@IsIdentityCard(locale?: string) Kiểm tra xem chuỗi ký tự có phải là mã chứng minh thư hợp lệ hay không.


@IsPassportNumber(countryCode?: string) Kiểm tra xem chuỗi có phải là số hộ chiếu hợp lệ theo mã quốc gia cụ thể hay không.


@IsPostalCode(locale?: string) Kiểm tra xem chuỗi ký tự có phải là mã bưu chính hay không.


@IsHexadecimal() Kiểm tra xem chuỗi có phải là số thập lục phân hay không.


@IsOctal() Kiểm tra xem chuỗi có phải là số bát phân hay không.


@IsMACAddress(options?: IsMACAddressOptions) Kiểm tra xem chuỗi có phải là Địa chỉ MAC không.


@IsIP(version?: "4"|"6") Kiểm tra xem chuỗi có phải là IP (phiên bản 4 hoặc 6) không.


@IsPort() Kiểm tra xem chuỗi có phải là số cổng hợp lệ hay không.


@IsISBN(version?: "10"|"13") Kiểm tra xem chuỗi có phải là ISBN (phiên bản 10 hoặc 13) không.


@IsEAN() Kiểm tra xem chuỗi có phải là EAN (Mã số bài viết châu Âu) hay không.


@IsISIN() Kiểm tra xem chuỗi có phải là ISIN (mã định danh chứng khoán/cổ phiếu) hay không.


@IsISO8601(options?: IsISO8601Options) Kiểm tra xem chuỗi có phải là định dạng ngày hợp lệ theo ISO 8601 không. Sử dụng tùy chọn strict = true để kiểm tra thêm ngày hợp lệ.


@IsJSON() Kiểm tra xem chuỗi có phải là JSON hợp lệ hay không.


@IsJWT() Kiểm tra xem chuỗi có phải là JWT hợp lệ hay không.


@IsObject() Kiểm tra xem đối tượng có phải là Đối tượng hợp lệ hay không (null, hàm, mảng sẽ trả về false).


@IsNotEmptyObject() Kiểm tra xem đối tượng có rỗng không.


@IsLowercase() Kiểm tra xem chuỗi có phải là chữ thường không.


@IsLatLong() Kiểm tra xem chuỗi có phải là tọa độ vĩ độ-kinh độ hợp lệ theo định dạng vĩ độ, kinh độ hay không.


@IsLatitude() Kiểm tra xem chuỗi hoặc số có phải là tọa độ vĩ độ hợp lệ hay không.


@IsLongitude() Kiểm tra xem chuỗi hoặc số có phải là tọa độ kinh độ hợp lệ hay không.


@IsMobilePhone(locale: string) Kiểm tra xem chuỗi có phải là số điện thoại di động hay không.


@IsISO31661Alpha2() Kiểm tra xem chuỗi có phải là mã quốc gia hợp lệ theo ISO 3166-1 alpha-2 được chỉ định chính thức hay không.


@IsISO31661Alpha3() Kiểm tra xem chuỗi có phải là mã quốc gia được chỉ định chính thức theo ISO 3166-1 alpha-3 hay không.


@IsLocale() Kiểm tra xem chuỗi có phải là ngôn ngữ bản địa hay không.


@IsPhoneNumber(region: string) Kiểm tra xem chuỗi có phải là số điện thoại hợp lệ hay không bằng libphonenumber-js.


@IsMongoId() Kiểm tra xem chuỗi có phải là biểu diễn được mã hóa hex hợp lệ của MongoDB ObjectId hay không.


@IsMultibyte() Kiểm tra xem chuỗi có chứa một hay nhiều ký tự đa byte hay không.


@IsNumberString(options?: IsNumericOptions) Kiểm tra xem chuỗi có phải là số hay không.


@IsSurrogatePair() Kiểm tra xem chuỗi có chứa bất kỳ cặp ký tự thay thế nào không.


@IsTaxId() Kiểm tra xem chuỗi có phải là mã số thuế hợp lệ hay không. Ngôn ngữ mặc định là en-US.


@IsUrl(options?: IsURLOptions) Kiểm tra xem chuỗi có phải là URL không.


@IsMagnetURI() Kiểm tra xem chuỗi có phải là định dạng uri nam châm hay không .


@IsUUID(version?: UUIDVersion) Kiểm tra xem chuỗi có phải là UUID (phiên bản 3, 4, 5 hoặc tất cả) hay không.


@IsFirebasePushId() Kiểm tra xem chuỗi có phải là Firebase Push ID không


@IsUppercase() Kiểm tra xem chuỗi có phải là chữ hoa hay không.


@Length(min: number, max?: number) Kiểm tra xem độ dài của chuỗi có nằm trong một phạm vi nào đó không.


@MinLength(min: number) Kiểm tra xem độ dài của chuỗi có nhỏ hơn số đã cho hay không.


@MaxLength(max: number) Kiểm tra xem độ dài của chuỗi có lớn hơn số đã cho hay không.


@Matches(pattern: RegExp, modifiers?: string) Kiểm tra xem chuỗi có khớp với mẫu không. Hoặc matches('foo', /foo/i) hoặc matches('foo', 'foo', 'i').


@IsMilitaryTime() Kiểm tra xem chuỗi có phải là biểu diễn hợp lệ của thời gian quân sự theo định dạng HH:MM hay không.


@IsTimeZone() Kiểm tra xem chuỗi có biểu thị múi giờ IANA hợp lệ hay không.


@IsHash(algorithm: string) Kiểm tra xem chuỗi có phải là băm hay không. Các kiểu sau được hỗ trợ: md4, md5, sha1, sha256, sha384, sha512, ripemd128, ripemd160, tiger128, , tiger160, tiger192, crc32, crc32b.


@IsMimeType() Kiểm tra xem chuỗi có khớp với định dạng loại MIME hợp lệ không


@IsSemVer() Kiểm tra xem chuỗi có phải là Đặc tả phiên bản ngữ nghĩa (SemVer) hay không.


@IsISSN(options?: IsISSNOptions) Kiểm tra xem chuỗi có phải là ISSN không.


@IsISRC() Kiểm tra xem chuỗi có phải là ISRC hay không .


@IsRFC3339() Kiểm tra xem chuỗi có phải là ngày hợp lệ theo RFC 3339 hay không .


@IsStrongPassword(options?: IsStrongPasswordOptions) Kiểm tra xem chuỗi ký tự có phải là mật khẩu mạnh hay không.
Bộ trang trí xác thực mảng


@ArrayContains(values: any[]) Kiểm tra xem mảng có chứa tất cả các giá trị từ mảng giá trị đã cho hay không.


@ArrayNotContains(uniquevalues: any[]) Kiểm tra xem mảng có chứa bất kỳ giá trị nào được cung cấp hay không.


@ArrayNotEmpty() Kiểm tra xem mảng đã cho có rỗng hay không.


@ArrayMinSize(min: number) Kiểm tra xem độ dài của mảng có lớn hơn hoặc bằng số đã chỉ định hay không.


@ArrayMaxSize(max: number) Kiểm tra xem độ dài của mảng có nhỏ hơn hay bằng số đã chỉ định không.


@ArrayUnique(identifier?: (o) => any) Kiểm tra xem tất cả các giá trị của mảng có duy nhất không. So sánh đối tượng dựa trên tham chiếu. Có thể chỉ định hàm tùy chọn nào sẽ được sử dụng để so sánh.
Trình trang trí xác thực đối tượng


@IsInstance(value: any) Kiểm tra xem thuộc tính có phải là phiên bản của giá trị được truyền hay không.
Những người trang trí khác


@Allow() Ngăn chặn việc loại bỏ thuộc tính khi không có ràng buộc nào khác được chỉ định cho thuộc tính đó.
