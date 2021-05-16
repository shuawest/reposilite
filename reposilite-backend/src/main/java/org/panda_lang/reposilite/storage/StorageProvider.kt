package org.panda_lang.reposilite.storage

import org.panda_lang.reposilite.failure.api.ErrorResponse
import org.panda_lang.reposilite.maven.repository.api.FileDetailsResponse
import org.panda_lang.utilities.commons.function.Result
import java.io.InputStream
import java.nio.file.Path
import java.nio.file.attribute.FileTime

interface StorageProvider {

    /**
     * Writes the bytes to the path specified in storage.
     *
     * @param file  the path of the file to be written
     * @param bytes the bytes to write
     * @return a [FileDetailsResponse] object describing the file if successful, and an [ErrorResponse] if not
     */
    fun putFile(file: Path, bytes: ByteArray): Result<FileDetailsResponse, ErrorResponse>

    /**
     * Writes the given [InputStream] to the path specified in storage.
     *
     * @param file  the path of the file to be written
     * @param inputStream the stream supplying the data to write
     * @return a [FileDetailsResponse] object describing the file if successful, and an [ErrorResponse] if not
     */
    fun putFile(file: Path, inputStream: InputStream): Result<FileDetailsResponse, ErrorResponse>

    fun getFile(file: Path): Result<ByteArray, ErrorResponse>

    fun getFileDetails(file: Path): Result<FileDetailsResponse, ErrorResponse>

    fun removeFile(file: Path): Result<Void, ErrorResponse>

    fun getFiles(directory: Path): Result<List<Path>, ErrorResponse>

    fun getLastModifiedTime(file: Path): Result<FileTime, ErrorResponse>

    fun getFileSize(file: Path): Result<Long, ErrorResponse>

    fun exists(file: Path): Boolean

    fun isDirectory(file: Path): Boolean

    fun isFull(): Boolean

    fun usage(): Long

    fun canHold(contentLength: Long): Boolean

    fun shutdown() {}

}